import Image from "next/image";
import Jumbo from "./components/HomePage/Jumbo";
import Header from "./components/HomePage/header";
import Footer from "./components/HomePage/footer";
export default function Home() {
  return (
    <section className="container">
      <Header />
      <main>
        <section className="Main-Container">
          <Jumbo />
        </section>
      </main>
      <Footer></Footer>
    </section>
  );
}
