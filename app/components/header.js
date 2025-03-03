"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import "../style/header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`header ${
        pathname === "/"
          ? "header-home"
          : pathname === "/Pages/News"
          ? "header-news"
          : pathname === "/Pages/Search"
          ? "header-search"
          : "header-search"
      }`}
    >
      <div className="header-container">
        <div className="logo">
          <Image
            src="/images/Home/small-logo.png"
            alt="small logo"
            width={40}
            height={40}
          />
        </div>

        <div className="extended-logo ">
          <Image
            src="/images/Home/extended-logo.png"
            alt="extended logo"
            width={100}
            height={40}
          />
        </div>

        <nav className="links desktop-toggle">
          <a href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </a>
          <a
            href="/Pages/Search"
            className={pathname === "/Pages/Search" ? "active" : ""}
          >
            Search
          </a>
          <a
            href="/Pages/News"
            className={pathname === "/Pages/News" ? "active" : ""}
          >
            News
          </a>
        </nav>

        <button
          className="menu-button mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <nav className="mobile-menu mobile-toggle links">
            <Link href="/">Home</Link>
            <Link href="/Pages/Search">Search</Link>
            <Link href="/Pages/News">News</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
