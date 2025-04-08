import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waterhub Africa",
  description: "Smart water solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="180x180" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              
            {children}
              
        </ThemeProvider>
      </body>
    </html>
  );
}

