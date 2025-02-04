import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pages = [
  "default",
  "gypsies",
  "lesbos",
  "french",
  "junky",
  "pookie",
  "miss",
];

export default function Home() {
  const [num, setNum] = useState(0);
  console.log(num);

  const handleClick = () => {
    setNum((prev) => (prev + 1) % pages.length);
  };

  return (
    <>
      <Head>
        <title>For Lucinka</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heart.svg" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div class={styles.container}>
            <span class={styles.heart}>❤️</span>
            <span class={styles.heart}>💖</span>
            <span class={styles.heart}>💗</span>
            <span class={styles.heart}>💕</span>
            <span class={styles.heart}>💞</span>
            <span class={styles.heart}>💘</span>
            <span class={styles.heart}>💝</span>
            <span class={styles.heart}>💟</span>
            <span class={styles.heart}>❣️</span>
          </div>
          {num === 0 && (
            <>
              <h1>
                I am very sorry for saying kys. I lost temper for a moment which
                I heavily regret. You should never kys.
              </h1>
              <h2>But u know who should ?</h2>
            </>
          )}

          {num === 1 && (
            <div className={styles.wrap}>
              <h3>Gypsies</h3>
              <img src="/imgs/gypsies.jpg" />
            </div>
          )}

          {num === 2 && (
            <div className={styles.wrap}>
              <h3>Fat lesbians</h3>
              <img src="/imgs/lesbians.jpg" />
            </div>
          )}

          {num === 3 && (
            <div className={styles.wrap}>
              <h3>French people</h3>
              <img src="/imgs/french.jpg" />
            </div>
          )}

          {num === 4 && (
            <div className={styles.wrap}>
              <h3>Junkie</h3>
              <img src="/imgs/junkie.jpg" />
            </div>
          )}

          {num === 5 && (
            <div className={styles.wrap}>
              <h3>But not a pookie san</h3>
              <img src="/imgs/pookie.jpg" />
            </div>
          )}

          {num === 6 && (
            <div className={styles.wrap}>
              <h3>Miss u :(</h3>
            </div>
          )}

          <button className={styles.btn} onClick={handleClick}>
            Click
          </button>
        </main>
      </div>
    </>
  );
}
