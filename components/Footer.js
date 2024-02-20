import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterMenuDropdown from "./FooterMenuDropdown";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol etmek için bir fonksiyon
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 991);
  };

  // Komponent yüklendiğinde ve ekran boyutu değiştiğinde çalışacak
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const products = {
    title: "Ürünlerimiz",
    links: [
      { href: "/kasko-sigortasi", title: "Kasko Sigortası" },
      { href: "/trafik-sigortasi", title: "Trafik Sigortası" },
      { href: "/imm-sigortasi", title: "İMM Sigortası" },
      // Diğer ürün linkleri...
    ],
  };
  const insuranceCompanies = {
    title: "Sigorta Şirketleri",
    links: [
      { href: "/turkiye-sigorta", title: "Türkiye Sigorta" },
      { href: "/aksigorta", title: "Ak Sigorta" },
    ],
  };
  const quickAccess = {
    title: "Hızlı Erişim",
    links: [
      { href: "/kasko-arac-deger-listesi", title: "Kasko Araç Değer Listesi" },
      // Diğer hızlı erişim linkleri...
    ],
  };
  const aboutUs = {
    title: "Hakkımızda",
    links: [
      { href: "/hakkimizda", title: "Biz Kimiz?" },
      // Diğer hakkımızda linkleri...
    ],
  };

  const menus = [
    {
      title: "Ürünlerimiz",
      links: [
        { href: "/kasko-sigortasi", title: "Kasko Sigortası" },
        { href: "/trafik-sigortasi", title: "Trafik Sigortası" },
        { href: "/imm-sigortasi", title: "İMM Sigortası" },
        // Diğer ürün linkleri...
      ],
    },
    {
      title: "Sigorta Şirketleri",
      links: [
        { href: "/turkiye-sigorta", title: "Türkiye Sigorta" },
        { href: "/aksigorta", title: "Ak Sigorta" },
        // Diğer sigorta şirketleri...
      ],
    },
    {
      title: "Hızlı Erişim",
      links: [
        {
          href: "/kasko-arac-deger-listesi",
          title: "Kasko Araç Değer Listesi",
        },
        // Diğer hızlı erişim linkleri...
      ],
    },
    {
      title: "Hakkımızda",
      links: [
        { href: "/hakkimizda", title: "Biz Kimiz?" },
        // Diğer hakkımızda linkleri...
      ],
    },
  ];

  return (
    <footer className="footer app-footer">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1200px",
          gap: 10,
          margin: "auto",
        }}
      >
        {isMobile ? (
          <>
            {menus.map((items, index) => (
              <FooterMenuDropdown key={index} items={items} />
            ))}
          </>
        ) : (
          <>
            {menus.map((menu, index) => (
              <div key={index} style={{ flex: 1, minWidth: "250px" }}>
                <h4>{menu.title}</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {menu.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      style={{
                        marginBottom: "10px",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
