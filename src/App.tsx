import { useEffect, useState } from "react";
import "./App.css";
import About from "./pages/About";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "skills", "work"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, []);

  return (
    <>
      <div className="p-2">
        <div className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
          <Nav activeSection={activeSection} />
        </div>
        <div className="pt-16">
          <Header />
        </div>
        <div className="bg-gray-50 p-4">
          <About />
        </div>
        <div className="p-4">
          <Skills />
        </div>
        <div className="bg-gray-50 p-4">
          <Work />
        </div>
        <div className="p-4">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
