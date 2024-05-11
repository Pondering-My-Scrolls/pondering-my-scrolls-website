"use client";

import '../assets/styles/main.scss';

import React from 'react';
import { usePathname } from 'next/navigation';

import Header from "../components/header/Header.js";
import Footer from "../components/footer/footer.js";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}