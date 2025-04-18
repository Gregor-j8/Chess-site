import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../server/routers/_app";
import superjson from 'superjson';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
        url: '/api/trpc',
        transformer: superjson
    }),
  ],
});
