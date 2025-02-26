import Image from "next/image";
import Jumbo from "./components/HomePage/Jumbo";
import Header from "./components/header";
import Footer from "./components/footer";
import PrimarySlider from "./components/HomePage/PrimarySlider";
import PopularSlider from "./components/HomePage/PopularSlider";
import Search from "./components/HomePage/Search";
export default function Home() {
  return (
    <section className="container">
      <main>
        <section className="Main-Container">
          <Jumbo />
          <PrimarySlider />
          <Search />
          <PopularSlider />
        </section>
      </main>
    </section>
  );
}
