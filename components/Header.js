import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa"; // Telefon ikonu için
import posts from "../data/posts.json"; // Doğru yolu sağladığınızdan emin olun

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <Navbar
      expand="lg"
      className=" px-[15px]  text-white   transition duration-300 ease  "
      style={{
        width: "100%",

        display: "flex",
        justifyContent: " space-between",
        alignItems: "space-between",
        gap: "15px",
        background: offset == 0 && isMobile == false ? "transparent" : "white",
        position: "fixed",
        padding: "10px",
        zIndex: 999,
      }}
    >
      <Navbar.Brand
        href="/"
        className="transition duration-500 ease-out w relative md:relative lg:absolute  top-3 left-3 h-[32px] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] "
      >
        <Image
          className="d-inline-block align-top  object-contain object-center  "
          src="/header-logo.svg"
          fill
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="w-full lg:d-flex justify-center items-center gap-2 text-center"
      >
        <Nav>
          <NavDropdown
            title="Ürünlerimiz"
            id="basic-nav-dropdown"
            style={{
              display: "inline-block",
              flexDirection: "column",
            }}
          >
            {posts.map((post, postIndex) => (
              <Link
                href={`/blog/${post.slug}`}
                key={postIndex}
                className="d-block mb-3 px-3"
              >
                {post.title}
              </Link>
            ))}
          </NavDropdown>
          <Nav.Link className="  transition duration-700 ease-out  " href="/">
            Kampanyalar
          </Nav.Link>
          <NavDropdown
            title="Poliçe İşlemleri"
            id="basic-nav-dropdown"
            style={{
              display: "inline-block",
              flexDirection: "column",
            }}
          >
            {posts.map((post, postIndex) => (
              <Link
                href={`/blog/${post.slug}`}
                key={postIndex}
                className="d-block mb-3 px-3"
              >
                {post.title}
              </Link>
            ))}
          </NavDropdown>
          <NavDropdown
            title="Bilgi Merkezi"
            id="basic-nav-dropdown"
            style={{
              display: "inline-block",
              flexDirection: "column",
            }}
          >
            {posts.map((post, postIndex) => (
              <Link
                href={`/blog/${post.slug}`}
                key={postIndex}
                className="d-block mb-3 px-3"
              >
                {post.title}
              </Link>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div
        className="relative lg:absolute  header-right-side  sm:d-none md:d-flex lg:d-flex align-items-center absolute right-2 top-2  transition duration-500 ease-out ml-3"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-start",
          gap: 40,
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginRight: "10px",
            color: "black",
            width: "100%",
          }}
        >
          <div style={{ textWrap: "nowrap", fontWeight: 400, fontSize: 12 }}>
            Yardımcı olmaya hazırız
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "right",
              justifyContent: "flex-end",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            <FaPhone style={{ marginRight: "5px" }} /> 444 24 00
          </div>
        </div>
        <Link
          href="/giris"
          style={{
            textWrap: "nowrap",
            borderRadius: "12px",
            fontSize: "16px",
          }}
          className="text-white bg-[#0089ec]  text-center w-full py-3 px-4 transition duration-500 ease-out hover:bg-blue-600"
        >
          Giriş Yap / Üye Ol
        </Link>
      </div>
    </Navbar>
  );
}
