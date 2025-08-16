"use client";
import { LanguageProvider } from '../language/page';
import { ReactNode } from 'react';
export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}