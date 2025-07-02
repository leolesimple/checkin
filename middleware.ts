import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const session = req.cookies.get('sb-access-token')?.value

    if (!session && req.nextUrl.pathname.startsWith('/dashboard') && !req.nextUrl.pathname.includes('/login')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*']
}