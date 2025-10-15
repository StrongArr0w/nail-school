import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./i18n";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Works from "./components/Works";
import Diplomas from "./components/Diplomas";
import BeforeAfter from "./components/BeforeAfter";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ScrollTop from "./components/ScrollTop";
import { useTranslation } from "react-i18next";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  // scroll-to-top
  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // плавная прокрутка
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="page" id="top">
      <Navbar scrollToSection={scrollToSection} setShowModal={setShowModal} />

      <div className="top-banner">
        <p>{t("banner.text")}</p>
      </div>

      <Hero setShowModal={setShowModal} />
      <About />
      <Courses />
      <Works />
      <Diplomas />
      <BeforeAfter />
      <Reviews />
      <Footer />

      {showModal && <Modal setShowModal={setShowModal} />}
      {visible && <ScrollTop />}
    </main>
  );
}
