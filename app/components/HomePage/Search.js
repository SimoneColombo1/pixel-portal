import Image from "next/image";
import Style from "../../style/HomePage/search.scss";
import Link from "next/link";
export default function Search() {
  return (
    <section className="search-section">
      <div className="container">
        <div className="paragraph">
          <p>
            Search for the game best suited to you in an always updated
            catalogue
          </p>
          <button>
            <Link href="/Pages/Search">Search</Link>
          </button>
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
