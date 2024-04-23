import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "@fontsource/poppins";
import { Settings } from "./pages/Settings";
import { Save } from "./pages/Save";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/save" element={<Save />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
