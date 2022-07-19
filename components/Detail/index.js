import styles from "./styles.module.scss";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb";

export default function Detail({ item, categories }) {

  const getCurrecyFormat = (number) => {
    return number.toLocaleString({ style: 'currency', currency: 'ARS' })
  }

  const conditionsTexts = {
    "new": "Nuevo",
  };

  const currencyText = {
    "ARS" : "$",
    "USD" : "U$S"
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
          <Breadcrumb categories={categories}/>
      </div>
      <div className={styles.detail}>
        
        <div className={styles.description}>
          <div className={styles.img}>
            <Image priority={true} alt={"Product"} src={item.picture} layout={"fill"} />
          </div>
          <div className={styles.title}>
            <span>Descripción del producto</span>
          </div>
          <div className={styles.text}>
            <p>
              {item.description}
            </p>
          </div>
        </div>

        <div>
          <span className={styles.sold}>{conditionsTexts[item.condition]} - {item.sold_quantity} vendidos</span>
          <div className={styles.product}>
            <span className={styles.name}>{item.title}</span>
            <div className={styles.price}>
              <span>{currencyText[item.price.currency] || '$'} {getCurrecyFormat(item.price.amount)}</span>
              <span className={styles.decimals}>{item.price.decimals}</span> 
            </div>
        
            <button className={styles.button}>Comprar</button>
          </div>
        </div>

      </div>
    </div>
  );
}
