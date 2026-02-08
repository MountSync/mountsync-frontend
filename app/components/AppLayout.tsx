'use client';

import { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
