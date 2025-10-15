import { useTranslation } from "react-i18next";
import aboutImg from "../assets/about.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about" data-aos="fade-right">
      <h2>{t("about.title")}</h2>
      <div className="about__content">
        <img src={aboutImg} alt="Анастасия" className="about-img" />
        <p>{t("about.text")}</p>
      </div>
    </section>
  );
}
