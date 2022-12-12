import { NextFetchEvent, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest, _: NextFetchEvent) {
  return NextResponse.next();
}
