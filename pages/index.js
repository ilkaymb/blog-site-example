import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Entrance from "@/components/Entrance";

export default function Home() {
  return (
    <>
      <Header />

      <main className={`${inter.className}`} style={{ minHeight: "100vh" }}>
        <Entrance />
      </main>
      <Footer />
    </>
  );
}
