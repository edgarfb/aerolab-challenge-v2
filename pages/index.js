import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";
import Products from "../components/products";

export default function Home() {
  return (
    <>
      <MainImage />
      <ProductSorterBar />
      <Products />
    </>
  );
}
