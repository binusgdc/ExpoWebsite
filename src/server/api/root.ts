import { createTRPCRouter } from "~/server/api/trpc"
import { reregistrationRouter } from "./routers/reregistration"

export const appRouter = createTRPCRouter({
    reregistrationRouter,
})

export type AppRouter = typeof appRouter
