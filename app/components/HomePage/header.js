import Image from "next/image";
import Style from "../../style/header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">LOGO</div>
        <div className="extended-logo">PiXel Portal</div>
        <div className="links">
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">News</a>
        </div>
      </div>
    </header>
  );
}
