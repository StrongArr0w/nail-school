import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Courses() {
  const [openCourse, setOpenCourse] = useState<number | null>(null);
  const { t } = useTranslation();

  const courses = t("courses.list", { returnObjects: true }) as {
    b: string;
    d: string;
    details: string[];
  }[];

  return (
    <section id="courses" className="courses" data-aos="fade-left">
      <h2 className="courses__title">{t("courses.title")}</h2>

      <div className="courses__list">
        {courses.map((c, i) => {
          const isOpen = openCourse === i;

          return (
            <motion.article
              key={i}
              className={`course-card ${isOpen ? "open" : ""}`}
              onClick={() => setOpenCourse(isOpen ? null : i)}
            >
              <h3 className="course-card__title">{c.b}</h3>
              <p className="course-card__desc">{c.d}</p>

              {isOpen && (
                <ul className="course-card__details">
                  {c.details.map((item, idx) =>
                    item === "" ? (
                      <li
                        key={idx}
                        style={{ listStyle: "none", margin: "8px 0" }}
                      >
                        &nbsp;
                      </li>
                    ) : (
                      <li
                        key={idx}
                        className={item.endsWith(":") ? "section-title" : ""}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
