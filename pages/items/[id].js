import Layout from "components/Layout";
import Detail from "components/Detail";

export default function Product({ item, categories }) {
  return (
    <Layout title={"Detail"} description={"Product Detail"}>
      <Detail item={item} categories={categories} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { id } = query;
  const res = await fetch(process.env.DEVELOP_WEB_API + `/items/${id}`);
  if (res.status == 404 || res.status == 500) {
    return getRedirectObject();
  }
  const { item, categories } = await res.json();
  return {
    props: { item, categories },
  };

  function getRedirectObject() {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}
