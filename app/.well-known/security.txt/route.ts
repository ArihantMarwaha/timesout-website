import { NextResponse } from 'next/server';

export async function GET() {
  const securityPolicy = `Contact: mailto:timesoutsupport@gmail.com
Expires: 2028-01-01T00:00:00.000Z
Preferred-Languages: en
Canonical: https://timesoutapp.vercel.app/.well-known/security.txt
Policy: https://timesoutapp.vercel.app/privacy
`;

  return new NextResponse(securityPolicy, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
