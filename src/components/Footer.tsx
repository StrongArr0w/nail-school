import { useTranslation } from "react-i18next";
import {
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contacts">
      <h3>{t("footer.contact")}</h3>
      <div className="footer-contacts">
        <a href="tel:+48514686060" className="btn btn-icon">
          <FaPhone /> +48 514 686 060
        </a>
        <a href="mailto:nastysikoko@gmail.com" className="btn btn-icon">
          <FaEnvelope /> nastysikoko@gmail.com
        </a>
        <a
          href="https://t.me/nastysi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-icon"
        >
          <FaTelegramPlane /> Telegram
        </a>
        <a
          href="https://wa.me/48514686060"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-icon"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href="https://instagram.com/art_nails_krakow/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-icon"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {t("footer.rights")}
      </p>
    </footer>
  );
}
