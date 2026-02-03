import "./globals.css";
import { CustomerProvider } from "./context/CustomerContext";
import type { Metadata } from "next";
export const metadata : Metadata={
  title : "Customer-DashBoard",
  description : "Customer-dashbord by nextjs"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CustomerProvider>{children}</CustomerProvider>
      </body>
    </html>
  );
}
