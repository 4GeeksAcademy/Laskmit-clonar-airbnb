import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

// Que hace: define el marco global de la aplicacion (html/body, fuentes, estilos y metadata).
// De que depende: Next App Router, next/font, estilos globales y hojas de estilo de librerias UI.
// Donde se usa: automaticamente en todas las rutas bajo web/app.

// Configura la fuente principal de titulos y bloques destacados.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// Configura una fuente secundaria para texto de lectura continua.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayShare",
  description: "Experiencia de hospitalidad inspirada en Airbnb con enfoque mobile-first.",
};

// RootLayout es el casco global de la app: inyecta fuentes, estilos globales y el arbol de paginas.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
