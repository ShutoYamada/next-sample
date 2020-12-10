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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>Next + Typescript + Reduxのサンプル</p>
        <p>↓のボタンからカウンタ画面へ遷移</p>
        <Link href="/counter">
          <a>Counter</a>
        </Link>
      </main>
    </div>
  );
}
