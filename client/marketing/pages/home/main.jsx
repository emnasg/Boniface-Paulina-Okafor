import { createRoot } from "react-dom/client";
import HomePage from "./HomePage.jsx";

const container = document.getElementById("marketing-home-root");

if (container) {
  createRoot(container).render(<HomePage />);
}
