import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HomeTwo from "./pages/HomeTwo";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import ContactForm from "./pages/ContactForm";
import BookList from "./pages/BookList";

const logindata = { id: 1, name: "Md Hamidul Islam", uName: "Admin" };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/hometwo"  element={<HomeTwo />} />
        <Route path="/about-me"  element={<AboutMe />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
