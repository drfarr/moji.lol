import { NextResponse } from "next/server";
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://www.moji.lol",
        "https://moji-api.vercel.app",
        "https://moji-lol-web.vercel.app",
        "https://moji-cms.vercel.app",
      ]
    : [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
      ];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");

  console.log(origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Access-Control-Allow-Origin", origin || "*");
  requestHeaders.set("Access-Control-Allow-Credentials", "true");

  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  requestHeaders.set(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  // requestHeaders.set(
  //   "Access-Control-Allow-Headers",
  //   "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  // );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/api/:path*",
};
