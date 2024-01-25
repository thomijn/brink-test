
import Header from "@/components/Header";

import "../styles/style.scss";
import 'swiper/css';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Brink Test",
  description: "Brink Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
