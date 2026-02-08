'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import AuthProvider from '../providers/AuthProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
