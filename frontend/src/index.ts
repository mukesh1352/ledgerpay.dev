// src/index.ts
import { serve } from "bun";
import indexHtml from "./index.html"; // ✅ correct path

const server = serve({
  port: 3000,

  routes: {
    "/*": indexHtml,

    "/api/health": {
      GET() {
        return Response.json({
          status: "ok",
          service: "ledgerpay",
        });
      },
    },
  },

  development: {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
