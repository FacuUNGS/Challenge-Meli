import styles from "./styles.module.scss";

export default function Breadcrumb({categories}) {
  return (
    <>
      <div className={styles.container}>
        <ol className={styles.list}>
          {categories?.map( (category, index) => (
            <li className={styles.category} key={index}> 
              <span className={index === categories.length - 1 ? styles.strong : null}> {category} </span>
              {index < categories.length - 1 && <span>{">"}</span>}
            </li> 
          ))}
        </ol>
      </div>
    </>
  );
}
