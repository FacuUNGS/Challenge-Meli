import Breadcrumb from "../Breadcrumb";
import Item from "../Item";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function ItemList({items, categories}) {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Breadcrumb categories={categories}/>
        </div>
        <div className={styles.list}>
          {items.map((singleItem, index) => (
            <div data-test-id='list-item' key={singleItem.id}>
              <Link href={`/items/${singleItem.id}`}>
                <a data-test-id={`anchor-${index}`}>
                  <Item item={singleItem} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
