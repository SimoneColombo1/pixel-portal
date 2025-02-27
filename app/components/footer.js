"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "../style/footer.scss";
export default function Footer() {
  const pathname = usePathname();
  const footerLinks = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "Terms and Conditions", url: "/terms-conditions" },
  ];
  const gamingFooterLinks = [
    { text: "Games", url: "/games" },
    { text: "News", url: "/news" },
    { text: "Reviews", url: "/reviews" },
    { text: "Forums", url: "/forums" },
    { text: "Guides", url: "/guides" },
    { text: "Support", url: "/support" },
  ];
  const techFooterLinks = [
    { text: "Tech News", url: "/tech-news" },
    { text: "Gadgets", url: "/gadgets" },
    { text: "Tutorials", url: "/tutorials" },
    { text: "Reviews", url: "/reviews" },
    { text: "Careers", url: "/careers" },
    { text: "Contact Us", url: "/contact-us" },
  ];

  const FooterImage =
    pathname === "/"
      ? "/images/Home/jinx_pow_pow.png"
      : pathname === "/Pages/Search"
      ? "/images/Search/Gofrrey.png"
      : "/images/Search/Gofrrey.png";
  const FooterSizeWidth =
    pathname === "/" ? "450" : pathname === "/Pages/Search" ? "250" : "250";

  return (
    <footer
      className={`footer ${
        pathname === "/"
          ? "footer-home"
          : pathname === "/Pages/Search"
          ? "footer-search"
          : "footer-search"
      }`}
    >
      <section className="footer-container">
        <section className="upper-footer">
          <div className="footer-links">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.url || index}>
                  <Link className="links" href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              {gamingFooterLinks.map((link) => (
                <li key={link.url || index}>
                  <Link className="links" href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {techFooterLinks.map((link) => (
                <li key={link.url || index}>
                  <Link className="links" href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="image">
            <span>
              <Image
                src={FooterImage}
                width={FooterSizeWidth}
                height={300}
                alt="jinx"
              />
            </span>
          </div>
        </section>
        <hr></hr>
        <section className="lower-footer">
          <p>
            The RAWG API is used on this site. The site is for exhibition and
            non-commercial purposes
          </p>
        </section>
      </section>
    </footer>
  );
}
