import { createRoot } from "react-dom/client";
import ContactPage from "./ContactPage.jsx";

const container = document.getElementById("marketing-contact-root");

if (container) {
  createRoot(container).render(<ContactPage />);
}
