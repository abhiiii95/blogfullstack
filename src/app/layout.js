import { Poppins } from "next/font/google";
import "./globals.css";
import "../../src/Common/styles/global.scss"
import Header from "@/Common/Components/Header/Header";
import Footer from "@/Common/Components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
