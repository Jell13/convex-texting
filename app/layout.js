import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@components/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Convex testing with NextJS",
  description: "NextJS with convex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
