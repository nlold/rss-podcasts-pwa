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
      <head>
        <title>Podcast RSS Listener</title>
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" href="/icons/icon_x512.png" />
        <meta name="theme-color" content="#333333" />
        <meta
          name="description"
          content="Слушайте подкасты бесплатно без СМС и регистрации"
        />
      </head>
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
