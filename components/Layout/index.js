import Head from "next/head";
import Header from "../Header";
import styles from "./styles.module.scss";

export default function Layout({ children, title, description }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/Logo_ML.png" />
      </Head>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Header></Header>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Mercado Libre",
  description: "Marcketplace",
};
