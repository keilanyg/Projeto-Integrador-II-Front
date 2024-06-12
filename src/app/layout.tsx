import './globals.css'
import { Inter } from 'next/font/google'

import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acervo Bibliográfico',
  description: 'Gerenciamento de Bibliotecas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
