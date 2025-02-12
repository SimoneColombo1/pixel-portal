import Image from "next/image";
import Style from "../../style/HomePage/search.scss";
export default function Search() {
  return (
    <section className="Search">
      <div className="container">
        <div className="paragraph">
          <p>
            Search for the game best suited to you in an always updated
            catalogue
          </p>
          <button>Search</button>
        </div>

        <Image
          src={"/images/Home/leblanc.png"}
          width={450}
          height={400}
          className="desktop_only"
        />
      </div>
    </section>
  );
}
