"use client";

import React, { useRef, useEffect } from 'react';
import "./RippleGrid.css";
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface RippleGridProps {
  gridColor?: string;
  rippleIntensity?: number;
  gridSize?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseInteractionRadius?: number;
  className?: string;
}

export default function RippleGrid({
  gridColor = '#2C2825',
  rippleIntensity = 0.015,
  gridSize = 32, // absolute pixels
  opacity = 0.05,
  mouseInteraction = true,
  mouseInteractionRadius = 0.7,
  className = '',
}: RippleGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const isHovering = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uniformsRef = useRef<Record<string, { value: any }>>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Parse hex color
    const parseColor = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1], 16) / 255,
            parseInt(result[2], 16) / 255,
            parseInt(result[3], 16) / 255,
          ]
        : [0.17, 0.15, 0.14]; // default #2C2825
    };

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    const gl = renderer.gl;
    
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.zIndex = '-1';
    gl.canvas.style.pointerEvents = 'none'; // let clicks pass through
    
    container.appendChild(gl.canvas);

    const vertex = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 gridColor;
      uniform float rippleIntensity;
      uniform float gridSize;
      uniform float opacity;
      uniform bool mouseInteraction;
      uniform vec2 mousePosition;
      uniform float mouseInfluence;
      uniform float mouseInteractionRadius;
      uniform vec2 scrollOffset;
      varying vec2 vUv;

      float pi = 3.141592;

      void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= iResolution.x / iResolution.y;

          float dist = length(uv);
          // Grid is static by default
          vec2 rippleUv = uv;

          if (mouseInteraction && mouseInfluence > 0.0) {
              vec2 mouseUv = (mousePosition * 2.0 - 1.0);
              mouseUv.x *= iResolution.x / iResolution.y;
              float mouseDist = length(uv - mouseUv);
              
              float influence = mouseInfluence * exp(-mouseDist * mouseDist / (mouseInteractionRadius * mouseInteractionRadius));
              float mouseWave = sin(pi * (iTime * 2.0 - mouseDist * 3.0)) * influence;
              rippleUv += normalize(uv - mouseUv) * mouseWave * rippleIntensity * 0.4;
          }

          // Convert back to pixel coordinates
          vec2 pixelPos = rippleUv * (iResolution.y / 2.0);
          
          // Align grid with center and add scroll offset
          // (Scroll moves the document up, so we add the scroll position to the grid offset)
          vec2 gridMod = mod(pixelPos + gridSize / 2.0 + vec2(scrollOffset.x, -scrollOffset.y), gridSize);
          
          // Anti-aliased line drawing (1px thick)
          float halfWidth = 0.5; // using 0.5px on each side of the mathematical line
          vec2 line = smoothstep(halfWidth + 0.5, halfWidth, gridMod) + 
                      smoothstep(gridSize - halfWidth - 0.5, gridSize - halfWidth, gridMod);
                      
          float lineIntensity = clamp(max(line.x, line.y), 0.0, 1.0);

          // Subtle fade at the edges (optional, removed to match css)
          
          gl_FragColor = vec4(gridColor, lineIntensity * opacity);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      scrollOffset: { value: [0, 0] },
      gridColor: { value: parseColor(gridColor) },
      rippleIntensity: { value: rippleIntensity },
      gridSize: { value: gridSize },
      opacity: { value: opacity },
      mouseInteraction: { value: mouseInteraction },
      mousePosition: { value: [0.5, 0.5] },
      mouseInfluence: { value: 0 },
      mouseInteractionRadius: { value: mouseInteractionRadius },
    };
    
    uniformsRef.current = uniforms;

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex, fragment, uniforms });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      // It's full screen
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.iResolution.value = [width, height];
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      targetMousePos.current = {
        x: e.clientX / width,
        y: 1.0 - e.clientY / height,
      };
    };

    const handleMouseEnter = () => {
      if (mouseInteraction) isHovering.current = 1;
    };

    const handleMouseLeave = () => {
      if (mouseInteraction) isHovering.current = 0;
    };

    window.addEventListener('resize', resize);
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseenter', handleMouseEnter);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // initial state
    isHovering.current = 1;
    resize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId: number;
    let isPaused = false;

    const render = (time: number) => {
      if (isPaused) return;

      uniforms.iTime.value = time * 0.001;
      uniforms.scrollOffset.value = [window.scrollX, window.scrollY];
      
      // smooth mouse follow
      const ease = 0.1;
      mousePos.current.x += (targetMousePos.current.x - mousePos.current.x) * ease;
      mousePos.current.y += (targetMousePos.current.y - mousePos.current.y) * ease;
      
      const currentInfluence = uniforms.mouseInfluence.value;
      const targetInfluence = isHovering.current;
      uniforms.mouseInfluence.value += (targetInfluence - currentInfluence) * 0.05;
      
      uniforms.mousePosition.value = [mousePos.current.x, mousePos.current.y];
      
      renderer.render({ scene: mesh });

      // If user prefers reduced motion, render a single static frame instead of continuous loop
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        cancelAnimationFrame(animationId);
      } else {
        isPaused = false;
        if (!prefersReducedMotion) {
          animationId = requestAnimationFrame(render);
        } else {
          renderer.render({ scene: mesh });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial render
    render(0);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', resize);
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseenter', handleMouseEnter);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    if (!uniformsRef.current) return;
    const parseColor = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1], 16) / 255,
            parseInt(result[2], 16) / 255,
            parseInt(result[3], 16) / 255,
          ]
        : [0.17, 0.15, 0.14];
    };
    
    uniformsRef.current.gridColor.value = parseColor(gridColor);
    uniformsRef.current.rippleIntensity.value = rippleIntensity;
    uniformsRef.current.gridSize.value = gridSize;
    uniformsRef.current.opacity.value = opacity;
    uniformsRef.current.mouseInteraction.value = mouseInteraction;
    uniformsRef.current.mouseInteractionRadius.value = mouseInteractionRadius;
  }, [gridColor, rippleIntensity, gridSize, opacity, mouseInteraction, mouseInteractionRadius]);

  return <div ref={containerRef} className={`ripple-grid-container ${className}`} />;
}
