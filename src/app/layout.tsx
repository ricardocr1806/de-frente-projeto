import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "@/components/lead/LeadModalProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://defrente.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "De Frente Pra Homossexualidade | Imersão ao vivo com Pierry Rodrigues",
    template: "%s | De Frente Pra Homossexualidade",
  },
  description:
    "Um encontro ao vivo para pais e filhos que desejam reconstruir o diálogo, restaurar a conexão e encontrar direção para lidar com essa realidade dentro da família. 04 e 05 de julho.",
  keywords: [
    "reconciliação familiar",
    "diálogo entre pais e filhos",
    "comunicação familiar",
    "imersão online",
    "Pierry Rodrigues",
    "família",
  ],
  authors: [{ name: "Pierry Rodrigues" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "De Frente Pra Homossexualidade",
    title: "De Frente Pra Homossexualidade | Imersão ao vivo",
    description:
      "Reconstrua o diálogo e restaure a conexão dentro da sua família. Imersão ao vivo nos dias 04 e 05 de julho.",
    images: [{ url: "/pierry-glow.png", width: 603, height: 730, alt: "Pierry Rodrigues" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "De Frente Pra Homossexualidade",
    description:
      "Reconstrua o diálogo e restaure a conexão dentro da sua família. Imersão ao vivo nos dias 04 e 05 de julho.",
    images: ["/pierry-glow.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cloud">
        <LeadModalProvider>{children}</LeadModalProvider>
      </body>
    </html>
  );
}
