import Image from "next/image";
import Style from "../../style/HomePage/search.scss";

export default function Search() {
  return (
    <section className="search-section">
      <div className="container">
        <Image
          src={"/images/Home/GetJinxed.png"}
          width={200}
          height={200}
          alt={"get jinxed"}
          className="SearchDecoration"
        />

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
          alt={"Leblanc"}
          className="desktop_only"
        />
      </div>
    </section>
  );
}
