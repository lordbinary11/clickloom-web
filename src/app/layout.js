import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

// Primary font - Inter (Sans-serif)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Monospace font for code and technical content
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

// Serif font for headings and accents
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clickloom.io - Website Risk Intelligent Agent",
  description: "Analyze websites for security risks and potential threats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ErrorBoundary>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
