import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SpecialistsPage } from "./pages/SpecialistsPage";
import { PricesPage } from "./pages/PricesPage";
import { ContactsPage } from "./pages/ContactsPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
