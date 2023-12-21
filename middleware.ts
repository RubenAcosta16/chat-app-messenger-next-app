import { withAuth } from "next-auth/middleware";

//where is the signin page
export default withAuth({
  pages: {
    signIn: "/",
  },
});

//protected routes
export const config = { 
  matcher: [
    //the * means, protect all routes inside of this
    "/conversations/:path*",
    "/users/:path*",
  ]
};