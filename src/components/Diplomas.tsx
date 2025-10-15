import { useTranslation } from "react-i18next";
import diploma1 from "../assets/diploma1.jpg";
import diploma2 from "../assets/diploma2.jpg";

export default function Diplomas() {
  const { t } = useTranslation();

  return (
    <section id="diplomas" className="diplomas" data-aos="fade-up">
      <h2>{t("diplomas.title")}</h2>
      <div className="diplomas__grid">
        <img src={diploma1} alt="Диплом 1" />
        <img src={diploma2} alt="Диплом 2" />
      </div>
    </section>
  );
}
