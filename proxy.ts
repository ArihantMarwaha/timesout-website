import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SENSITIVE_PARAM_PATTERNS = [
  /token/i,
  /secret/i,
  /apikey/i,
  /api_key/i,
  /password/i,
  /passwd/i,
  /auth/i,
  /credential/i,
  /session/i,
  /privkey/i,
  /access_token/i,
  /refresh_token/i,
  /id_token/i,
  /code/i,
  /signature/i,
  /key/i,
];

function isSensitiveKey(key: string): boolean {
  return SENSITIVE_PARAM_PATTERNS.some((pattern) => pattern.test(key));
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  let hasSensitiveParam = false;

  const searchParams = new URLSearchParams(url.search);
  const keysToDelete: string[] = [];

  searchParams.forEach((_, key) => {
    if (isSensitiveKey(key)) {
      keysToDelete.push(key);
      hasSensitiveParam = true;
    }
  });

  if (hasSensitiveParam) {
    for (const key of keysToDelete) {
      searchParams.delete(key);
    }
    url.search = searchParams.toString();

    // 308 Permanent Redirect to clean, sanitized URL without exposing secrets
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all route pages except static assets, favicon, and next internal files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|screenshots/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
