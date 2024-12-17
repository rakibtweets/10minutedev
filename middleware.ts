import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/dashboard', '/courses', '/profile', '/enrollment'];

const adminRoutes = [
  '/admin',
  '/admin/settings',
  '/admin/courses',
  '/admin/courses/new',
  '/admin/users'
];

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }

  if (isAdminRoute && (!user || !user.isAdmin)) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/admin/:path*']
};
