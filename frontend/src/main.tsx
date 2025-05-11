import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRouting } from "./app.routing";
import Header from "./components/header.component";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AppRouting />
    </BrowserRouter>
  </StrictMode>
);
