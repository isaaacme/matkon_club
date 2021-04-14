import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ברוכים הבאים למועדון המתכון</h1>
        <p className={styles.description}>בלי חפירות, רק מתכונים</p>
        <div class="actions">
          <Link href="/search.js">
            <a>חיפוש מתכון</a>
          </Link>
          <Link href="/addMatkon.js">
            <a>הוספת מתכון</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        כל הזכויות שמורות ל{" "}
        <a href="https://isaaac.me/" target="_blank">
          isaaac.me
        </a>
      </footer>
    </div>
  );
}
