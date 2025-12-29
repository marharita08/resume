import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PdfPage } from "./pages/PdfPage";

export const RouteKeys = {
  MAIN: "/",
  PDF: "/pdf",
};

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={RouteKeys.MAIN} element={<MainPage />} />
      <Route path={RouteKeys.PDF} element={<PdfPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
