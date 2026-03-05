import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
export default withAuth(async function middleware(req) {
  const token = await getToken({ req });
  console.log(token);
});

export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/resister"],
};
