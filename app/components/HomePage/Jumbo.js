import Image from "next/image";
import Style from "../../style/HomePage/jumbo.scss";
import Variables from "../../style/variables.scss";
export default function Jumbo() {
  return (
    <section className="jumbo-container">
      <div className="jumbo">
        <div className="image"></div>
        <div className="title">
          <h1>NEWS</h1>
        </div>
      </div>
    </section>
  );
}
