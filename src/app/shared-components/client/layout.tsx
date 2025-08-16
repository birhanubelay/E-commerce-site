"use client";
import { ReactNode } from 'react';
import Header from '../header/page';
import Footer from '../footer/page';
export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}