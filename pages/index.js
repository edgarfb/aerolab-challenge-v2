import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";
import Products from "../components/products";
import { productsMock } from "../fake-data/products-mock";

export default function Home({ products }) {
  return (
    <>
      <MainImage />
      <ProductSorterBar />
      {/* <Products products={products} /> */}
      <Products products={productsMock} />
    </>
  );
}

// for production build
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}products`, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
//     },
//   });
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }
