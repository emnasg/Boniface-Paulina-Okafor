import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
