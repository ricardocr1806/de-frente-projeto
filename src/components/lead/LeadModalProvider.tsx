"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import { LeadModal } from "./LeadModal";

type LeadModalCtx = { open: () => void; close: () => void };

const Ctx = createContext<LeadModalCtx>({ open: () => {}, close: () => {} });

/** Hook para abrir o formulário de captura de lead de qualquer lugar. */
export function useLeadModal() {
  return useContext(Ctx);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <LeadModal open={isOpen} onClose={close} />
    </Ctx.Provider>
  );
}
