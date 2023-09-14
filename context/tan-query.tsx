"use client"

import React, { ReactNode } from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();
queryClient.invalidateQueries({ queryKey: ['no-cache'] })

export default function TanQueryProvider({ children }: {
    children: ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
