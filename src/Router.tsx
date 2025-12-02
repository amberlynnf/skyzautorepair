import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Contact from "./components/main/contact/Contact";
import { About } from "./components/main/about-us/About";
import { Special } from "./components/main/specials/Special";
import { Financing } from "./components/main/financing/Financing";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/specials" element={<Special/>} />
        <Route path="/financing" element={<Financing/>} />
      </Routes>
    </BrowserRouter>
  );
}
