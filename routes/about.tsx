import { Handlers } from "$fresh/server.ts";

export default function AboutPage() {
    return (
      <main>
        <h1>About</h1>
        <p>This is the about page.</p>
      </main>
    );
  }

  export const handler: Handlers = {
    GET(req, ctx) {
      const resp = {
        y: {
            "vars": [],
            "smps": [],
            "data": []
        }
    };
      return new Response(JSON.stringify(resp), {
        headers: { "Content-Type": "application/json" },
      });
    },
  };