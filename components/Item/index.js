import styles from "./styles.module.scss";
import Image from "next/image";

export default function Item({ item }) {

  const currencyText = {
    "ARS" : "$",
    "USD" : "U$S"
  }

  const getCurrecyFormat = (number) => {
    return number.toLocaleString({ style: 'currency', currency: 'ARS' })
  }

  const tryShowShippingIcon = (hasShipping) => {
    return hasShipping ? (
      <div data-test-id="shipping-icon">
        <Image
          alt={"Shipping Image"}
          src={`/Shipping.png`}
          height={`15px`}
          width={`15px`}
        />
      </div>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image priority={true} alt={"Producto"} src={item.picture} layout={"fill"} />
      </div>
      <div className={styles.description}>
        <div className={styles.price}>
          <span>{currencyText[item.price.currency] || '$'} {getCurrecyFormat(item.price.amount)}</span>
          {tryShowShippingIcon(item.free_shipping)}
        </div>
        <div className={styles.text}>
          <span>{item.title}</span>
        </div>
      </div>
      <div className={styles.location}>{item.address}</div>
    </div>
  );
}
