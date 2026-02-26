import type { Metadata } from "next";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ToastifyContainer } from "../components/ToastifyContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Blog - Este é um blog com Next.js",
    template: "%s - The Blog",
  },
  description: "Essa é uma descrição do blog.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
        <ToastifyContainer />
      </body>
    </html>
  );
}
