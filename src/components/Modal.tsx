import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Modal({
  setShowModal,
}: {
  setShowModal: (v: boolean) => void;
}) {
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvnkrwe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
        }, 3000);
      } else {
        alert(t("modal.error"));
      }
    } catch {
      alert(t("modal.networkError"));
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{t("modal.title")}</h2>
        {!success ? (
          <form
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
            className="modal-form"
          >
            <input
              type="text"
              name="name"
              placeholder={t("modal.name")}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("modal.phone")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("modal.email")}
              required
            />
            <button type="submit" className="btn btn-primary">
              {t("modal.send")}
            </button>
          </form>
        ) : (
          <p className="modal-success">{t("modal.success")}</p>
        )}
        <button className="modal-close" onClick={() => setShowModal(false)}>
          ✖
        </button>
      </div>
    </div>
  );
}
