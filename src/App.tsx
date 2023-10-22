import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import ImageUpload from "./pages/ImageUpload";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/imageUpload" element={<ImageUpload />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
