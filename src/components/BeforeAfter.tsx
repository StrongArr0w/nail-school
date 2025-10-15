import { useTranslation } from "react-i18next";

import before from "../assets/before.jpg";
import before1 from "../assets/before1.jpg";
import before2 from "../assets/before2.jpg";
import before3 from "../assets/before3.jpg";

import after from "../assets/after.jpg";
import after1 from "../assets/after1.jpg";
import after2 from "../assets/after2.jpg";
import after3 from "../assets/after3.jpg";

export default function BeforeAfter() {
  const { t } = useTranslation();

  return (
    <section id="before-after" className="before-after" data-aos="fade-up">
      <h2>{t("beforeAfter.title")}</h2>
      <div className="before-after__grid">
        <img src={before} alt={t("beforeAfter.beforeAlt")} />
        <img src={after} alt={t("beforeAfter.afterAlt")} />
        <img src={before1} alt={t("beforeAfter.beforeAlt")} />
        <img src={after1} alt={t("beforeAfter.afterAlt")} />
        <img src={before2} alt={t("beforeAfter.beforeAlt")} />
        <img src={after2} alt={t("beforeAfter.afterAlt")} />
        <img src={before3} alt={t("beforeAfter.beforeAlt")} />
        <img src={after3} alt={t("beforeAfter.afterAlt")} />
      </div>
    </section>
  );
}
