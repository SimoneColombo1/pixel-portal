import Image from "next/image";
import Jumbo from "./components/HomePage/Jumbo";
import Header from "./components/HomePage/header";
import Footer from "./components/HomePage/footer";
import PrimarySlider from "./components/HomePage/PrimarySlider";
import PopularSlider from "./components/HomePage/PopularSlider";
export default function Home() {
  return (
    <section className="container">
      <Header />
      <main>
        <section className="Main-Container">
          <Jumbo />
          <PrimarySlider />
          <PopularSlider />
        </section>
      </main>
      <Footer></Footer>
    </section>
  );
}
