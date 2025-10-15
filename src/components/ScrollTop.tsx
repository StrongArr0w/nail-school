import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
}
