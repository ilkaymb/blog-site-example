import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function ExampleCard() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "red",
        color: "white",
        height: 140,
      }}
    >
      <h1>Example Card</h1>
    </div>
  );
}

export default function Entrance() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: 1000,
          margin: "auto",
          paddingTop: "75px",
        }}
      >
        {" "}
        <h1 style={{ fontSize: 45, fontWeight: 700 }}>
          Sigortada Güvenin Adresi
        </h1>
        <p style={{ marginTop: 24, marginBottom: 14, fontSize: 18 }}>
          Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
        </p>
        <Container>
          <div className="container mx-auto4 mt-3 p-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
              <Card className="entrance-card">
                <Card.Body
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: 110,
                      height: 90,
                      objectFit: "contain",
                      objectPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Image src="/entrance/1.svg" alt="entrance-image" fill />
                  </div>
                  <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                    Kasko
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card className="entrance-card">
                <Card.Body
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: 110,
                      height: 90,
                      objectFit: "contain",
                      objectPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Image src="/entrance/2.svg" alt="entrance-image" fill />
                  </div>
                  <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                    Elektrikli Araç Kaskosu
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card className="entrance-card">
                <Card.Body
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: 110,
                      height: 90,
                      objectFit: "contain",
                      objectPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Image src="/entrance/3.svg" alt="entrance-image" fill />
                  </div>
                  <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                    Tamamlayıcı Sağlık
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
        <div className="container mx-auto4 mt-3">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Card className="entrance-card">
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 110,
                    height: 91,
                    objectFit: "contain",
                    objectPosition: "center",
                    position: "relative",
                  }}
                >
                  <Image src="/entrance/4.svg" alt="entrance-image" fill />
                </div>
                <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                  Trafik Sigortası
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="entrance-card">
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 110,
                    height: 91,
                    objectFit: "contain",
                    objectPosition: "center",
                    position: "relative",
                  }}
                >
                  <Image src="/entrance/5.svg" alt="entrance-image" fill />
                </div>
                <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                  İMM
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="entrance-card">
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 110,
                    height: 91,
                    objectFit: "contain",
                    objectPosition: "center",
                    position: "relative",
                  }}
                >
                  <Image src="/entrance/6.svg" alt="entrance-image" fill />
                </div>
                <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                  Seyahat Sağlık
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="entrance-card">
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 110,
                    height: 91,
                    objectFit: "contain",
                    objectPosition: "center",
                    position: "relative",
                  }}
                >
                  <Image src="/entrance/7.svg" alt="entrance-image" fill />
                </div>
                <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                  DASK
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="entrance-card">
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 110,
                    height: 91,
                    objectFit: "contain",
                    objectPosition: "center",
                    position: "relative",
                  }}
                >
                  <Image src="/entrance/8.svg" alt="entrance-image" fill />
                </div>
                <Card.Title style={{ fontSize: 15, fontWeight: "bold" }}>
                  Evim Güvende
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Link
          href="#"
          className="w-full text-center mt-[40px] text-blue-500 font-bold"
        >
          Tüm Ürünleri Gör
        </Link>
      </div>
    </div>
  );
}
