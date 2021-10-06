import Head from "next/head";
import Hero from "../components/modules/hero/Hero";
import LatestDestiny from "../components/modules/LatestDestiny/latestDestiny";
import PopDestiny from "../components/modules/popDestiny/PopDestiny";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.test}>
        <Hero />
        <LatestDestiny />
        <PopDestiny />
      </main>
    </div>
  );
}
