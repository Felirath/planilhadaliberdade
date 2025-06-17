
import type {Metadata} from 'next';
import Script from 'next/script'; // Importar o componente Script
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Planilha Liberdade - Domine Seu Dinheiro',
  description: 'Chega de terminar o mês no vermelho. Descubra onde seu dinheiro vai e recupere o controle AGORA!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontes do Google são mantidas no head para carregamento antecipado */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />

        {/* Script UTMify latest.js com Next/Script */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck // Manter atributos data-*
          data-utmify-prevent-subids
        />

        {/* Configuração do Pixel ID */}
        <Script id="utmify-pixel-config" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.pixelId = "684c87d2684525761ce32bfa";
            }
          `}
        </Script>

        {/* Script UTMify pixel.js com Next/Script, dependendo da configuração acima */}
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
