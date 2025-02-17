import Image from "next/image";
import Link from "next/link";

import Style from "../../style/HomePage/footer.scss";
export default function Footer() {
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
  return (
    <footer>
      <section className="footer-container">
        <section className="upper-footer">
          <div className="footer-links">
            <ul>
              {footerLinks.map((link) => (
                <li>
                  <Link className="links" href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              {gamingFooterLinks.map((link) => (
                <li>
                  <Link className="links" href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {techFooterLinks.map((link) => (
                <li>
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
                src={"/images/home/jinx_pow_pow.png"}
                width={450}
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
