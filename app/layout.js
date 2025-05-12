// app/layout.jsx or layout.tsx
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from './redux-provider';
import Navbar from "@/components/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Trabuwa Technology Pvt Ltd. | Your B2B e-commerce platform",
  description: "Next Generation B2B e-commerce platform to empower individuals and small business across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.className} suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <Navbar/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
