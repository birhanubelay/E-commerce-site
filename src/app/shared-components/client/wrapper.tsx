"use client";
import { LanguageProvider } from '../language/languageProvider';
import { ReactNode } from 'react';
export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}