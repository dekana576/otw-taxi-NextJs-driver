"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useState(() => new QueryClient())[0];
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider placement="top-right" />
        {children}
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
