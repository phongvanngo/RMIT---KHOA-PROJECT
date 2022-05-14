import "./App.css";
import Footer from "./components/Footer";
import contactUs from "./routes/ContactUs";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import CartPage from "./routes/Cart";
import ContactUs from "./routes/ContactUs";


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
