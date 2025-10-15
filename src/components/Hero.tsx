import { useTranslation } from "react-i18next";
import heroPhoto from "../assets/hero.jpg";

export default function Hero({
  setShowModal,
}: {
  setShowModal: (v: boolean) => void;
}) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-card" data-aos="fade-up">
      <img src={heroPhoto} alt={t("hero.alt")} className="hero-img" />
      <p>{t("hero.text")}</p>
      <button className="btn btn-cta" onClick={() => setShowModal(true)}>
        {t("hero.cta")}
      </button>
      <ul className="hero-card__chips">
        <li>{t("hero.points.0")}</li>
        <li>{t("hero.points.1")}</li>
        <li>{t("hero.points.2")}</li>
      </ul>
    </section>
  );
}
