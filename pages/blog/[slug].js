import React from "react";
import posts from "../../data/posts.json"; // Doğru yolu sağladığınızdan emin olun
import { Inter } from "next/font/google";

import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

function Page({ post }) {
  // useRouter hook'u bu örnekte kullanılmamış, fakat dinamik routing için kullanılabilir
  const router = useRouter();

  // Eğer post bulunamazsa (fallback: false durumu)
  if (!post) {
    return <div>Post bulunamadı!</div>;
  }

  return (
    <>
      <Header />
      <main className={`${inter.className}`} style={{ minHeight: "100vh" }}>
        <div className="container mx-auto pt-36">
          <div>
            <h1>{post.title}</h1>
            {post.content.map((item, index) => {
              switch (item.type) {
                case "subtitle":
                  return <h2 key={index}>{item.value}</h2>;
                case "text":
                  return (
                    <p key={index} className="mb-3">
                      {item.value}
                    </p>
                  );
                case "image":
                  return (
                    <div style={item.style} className="relative mb-3">
                      <Image
                        key={index}
                        src={item.src}
                        style={{ borderRadius: item.borderRadius }}
                        fill
                        alt=""
                      />
                    </div>
                  );
                case "list":
                  return (
                    <ul class="list-disc">
                      {item.items.map((listItem, index) => (
                        <li key={index} className="pb-3">
                          {typeof listItem === "string" ? (
                            listItem
                          ) : (
                            <Link href={listItem.href}>{listItem.value}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                case "link":
                  return <Link href={item.href}>{item.value}</Link>;
                case "video":
                  return (
                    <iframe
                      width={item.width || "560"}
                      height={item.height || "315"}
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  );
                default:
                  return null;
              }
            })}
          </div>
          <div>
            <h1>Postlar</h1>
            {posts.map((post, postIndex) => (
              <Link
                href={`/blog/${post.slug}`}
                key={postIndex}
                className="d-block mb-2"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  // Eğer post bulunamazsa null dön
  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export default Page;
