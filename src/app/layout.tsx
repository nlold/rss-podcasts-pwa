"use client";

import { CommonProvider } from "@/components/CommonContext/CommonContext";
import SideNav from "@/components/SideNav/SideNav";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          <div className="main">
            <CommonProvider>
              <SideNav />
              <section className="col note-viewer">{children}</section>
            </CommonProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
