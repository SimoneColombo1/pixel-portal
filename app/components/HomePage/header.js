import Image from "next/image";
import Style from "../../style/header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Image
            src="/images/Home/small-logo.png"
            alt="small logo"
            width={40}
            height={40}
          />
        </div>
        <div className="extended-logo">
          <Image
            src="/images/Home/extended-logo.png"
            alt="extended logo"
            width={100}
            height={40}
          />
        </div>
        <div className="links ">
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">News</a>
        </div>
      </div>
    </header>
  );
}
