import { serve, file } from "bun";
// Create Server
serve({
  fetch(request) {
    // Get Url and method from request
    const { url, method } = request;
    // Get Pathname form url
    const { pathname } = new URL(url);
    // Get archive index html with file method
    const html = file("index.html");
    if (pathname === "/" && method === "GET") {
      return new Response(html, {
        satus: 200,
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
  },
});
