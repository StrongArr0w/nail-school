import { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";

export default function Works() {
  const { t } = useTranslation();
  const gallery = [work1, work2, work3, work4];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="works" className="works" data-aos="fade-up">
      <h2>{t("works.title")}</h2>
      <div className="works__gallery">
        {gallery.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${t("works.alt")} ${idx + 1}`}
            onClick={() => {
              setPhotoIndex(idx);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={gallery.map((src) => ({ src }))}
          plugins={[Zoom, Slideshow]}
          carousel={{ finite: false }}
        />
      )}
    </section>
  );
}
