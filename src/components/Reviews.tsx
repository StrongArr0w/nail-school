import { useTranslation } from "react-i18next";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      img: person1,
      text: t("reviews.items.0.text"),
      author: t("reviews.items.0.author"),
    },
    {
      img: person2,
      text: t("reviews.items.1.text"),
      author: t("reviews.items.1.author"),
    },
  ];

  return (
    <section id="reviews" className="reviews-photo" data-aos="fade-up">
      <h2>{t("reviews.title")}</h2>
      <div className="reviews-photo__grid">
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <img
              src={review.img}
              alt={review.author}
              className="review-photo"
            />
            <p>{review.text}</p>
            <span>— {review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
