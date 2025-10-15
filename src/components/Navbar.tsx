import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({
  scrollToSection,
  setShowModal,
}: {
  scrollToSection: (id: string) => void;
  setShowModal: (v: boolean) => void;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  // Закрываем дропдаун при клике вне его
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("top")}>
        <span>{t("logo.part1")}</span> {t("logo.part2")}
      </div>

      <ul className={navOpen ? "open" : ""}>
        <li>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("top");
              setNavOpen(false);
            }}
          >
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a
            href="#courses"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("courses");
              setNavOpen(false);
            }}
          >
            {t("navbar.courses")}
          </a>
        </li>
        <li>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
              setNavOpen(false);
            }}
          >
            {t("navbar.signup")}
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacts");
              setNavOpen(false);
            }}
          >
            {t("navbar.contact")}
          </a>
        </li>
      </ul>

      <div className="nav-right">
        {/* Переключатель языков */}
        <div className="lang-dropdown" ref={langRef}>
          <button
            className="lang-switch"
            onClick={() => setLangOpen((v) => !v)}
          >
            🌐
          </button>
          {langOpen && (
            <div className="lang-menu">
              <button onClick={() => changeLanguage("ru")}>🇷🇺 Русский</button>
              <button onClick={() => changeLanguage("pl")}>🇵🇱 Polski</button>
              <button onClick={() => changeLanguage("es")}>🇪🇸 Español</button>
            </div>
          )}
        </div>

        {/* Бургер */}
        <button
          className="burger"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
