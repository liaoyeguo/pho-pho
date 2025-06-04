'use client'
import { trpc, TRPCProvider } from "@/utils/trpc"
import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "@/utils/react-quey"
import { ReactNode } from "react"

export const ClientProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>
        <TRPCProvider trpcClient={trpc} queryClient={queryClient}>
            {children}
        </TRPCProvider>
    </QueryClientProvider>
}