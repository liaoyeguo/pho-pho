import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/app/api/trpc";
import { createTRPCContext } from '@trpc/tanstack-react-query';

function getBaseUrl() {
  if (typeof window !== "undefined") {
    // In the browser, we return a relative URL
    return "";
  }
  // When rendering on the server, we return an absolute URL

  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl() + "/api/trpc",
    }),
  ],
});

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
