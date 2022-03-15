import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";
import Products from "../components/products";
import { useAppContext } from "../context/appContext";
import { productsMock } from "../fake-data/products-mock";

export default function Home({ products }) {
  console.log("productsMock", productsMock);
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
//   const res = await fetch("https://coding-challenge-api.aerolab.co/products", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJjN2Q3MGIyNWRhMDAwMjE4NjU0NmEiLCJpYXQiOjE2NDcwODI4NjR9.gToydF6wdHHAOr8_2v0sc3K7c_U9EihcuWNVB4x6Eds",
//     },
//   });
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }
