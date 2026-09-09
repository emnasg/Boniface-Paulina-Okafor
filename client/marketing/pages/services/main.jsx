import { createRoot } from "react-dom/client";
import ServicesPage from "./ServicesPage.jsx";

const container = document.getElementById("marketing-services-root");

if (container) {
  createRoot(container).render(<ServicesPage />);
}
