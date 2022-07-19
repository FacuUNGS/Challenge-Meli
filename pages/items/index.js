import ItemList from "components/ItemList";
import Layout from "components/Layout";

export default function Items({ items, categories }) {
  return (
    <Layout title={"Meli Products"} description={"Listing of products"}>
      <ItemList items={items} categories={categories} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    process.env.DEVELOP_WEB_API + `/items?q=:${query.search}`
  );
  if (res.status == 404 || res.status == 500) {
    return getRedirectObject();
  }
  const { items, categories } = await res.json();
  return { props: { items, categories } };

  function getRedirectObject() {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}
