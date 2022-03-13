import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";

export default function Home() {
  return (
    <>
      <MainImage />
      <ProductSorterBar />
    </>
  );
}
