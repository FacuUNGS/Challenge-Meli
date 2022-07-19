import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from 'next/image'


export default function Header() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault();
    router?.push(`/items?search=${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  };

  return (
    <header className={styles.container}>
      <Image
        alt={"Mercado Libre Logo"}
        src={`/Logo_ML.png`}
        height={`35%`}
        width={`48%`}
      />
      <form onSubmit={handleSubmit}  className={styles.form}>
        <input
          type={"text"}
          placeholder="Nunca dejes de buscar"
          className={styles.searcher}
          onChange={handleChange}
        />
        <input
          type={"submit"}
          className={styles.button}
          value={""}
        />
      </form>
    </header>
  );
}
