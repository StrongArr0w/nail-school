import React from "react";
import { useTranslation } from "react-i18next";

import diploma1 from "../assets/diploma1.jpg";
import diploma2 from "../assets/diploma2.jpg";
import diploma3 from "../assets/diploma3.jpg";
import diploma4 from "../assets/diploma4.jpg";
import diploma5 from "../assets/diploma5.jpg";
import diploma6 from "../assets/diploma6.jpg";
import diploma7 from "../assets/diploma7.jpg";
import diploma8 from "../assets/diploma8.jpg";

export default function Diplomas() {
  const { t } = useTranslation();

  const diplomas = [
    diploma1,
    diploma2,
    diploma3,
    diploma4,
    diploma5,
    diploma6,
    diploma7,
    diploma8,
  ];

  return (
    <section id="diplomas" className="diplomas" data-aos="fade-up">
      <h2>{t("diplomas.title")}</h2>
      <div className="diplomas__grid">
        {diplomas.map((src, index) => (
          <img key={index} src={src} alt={`Диплом ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
