import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <h1>Trip</h1>
      </Head>

      <main className={styles.main}>
        <h2>main</h2>
      </main>

      <footer className={styles.footer}>
        <h1>footer</h1>
      </footer>
    </div>
  );
}
