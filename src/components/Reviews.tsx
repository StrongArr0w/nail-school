import { useTranslation } from "react-i18next";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="reviews-photo" data-aos="fade-up">
      <h2>{t("reviews.title")}</h2>
      <div className="reviews-photo__grid">
        <div className="review-card">
          <img src={work1} alt="Мария" />
          <p>{t("reviews.items.0.text")}</p>
          <span>— {t("reviews.items.0.author")}</span>
        </div>
        <div className="review-card">
          <img src={work2} alt="Ольга" />
          <p>{t("reviews.items.1.text")}</p>
          <span>— {t("reviews.items.1.author")}</span>
        </div>
      </div>
    </section>
  );
}
