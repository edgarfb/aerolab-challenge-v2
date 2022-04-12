import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";
import Products from "../components/products";
import { useReducer, useState } from "react";
import { ProductsContextProvider } from "../context/productsContext";

export default function Home({ productsProps }) {
  const [products, dispatch] = useReducer(productsReducer, productsProps);
  const [initPage, setInitPage] = useState(0);
  const [endPage, setEndPage] = useState(16);
  const productsLength = products.length;

  return (
    <>
      <Head>
        <title>Aerolab Coding Challenge</title>
      </Head>
      <MainImage />
      <ProductsContextProvider
        value={{
          initPage,
          endPage,
          products,
          productsLength,
          setInitPage,
          setEndPage,
        }}
      >
        <ProductSorterBar setdispatch={dispatch} />
        <Products />
        <ProductSorterBar showSorter={false} />
      </ProductsContextProvider>
    </>
  );
}

export async function getStaticProps() {
  const url = `${process.env.API_BASE_URL}/products`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const products = await res.json();

  return {
    props: {
      productsProps: products,
    },
  };
}

function productsReducer(state, action) {
  switch (action.type) {
    // I need to think what should be the MOST_RECENT case
    case "MOST_RECENT": {
      return state;
    }
    case "LOWER_PRICE": {
      return [...state].sort((a, b) => a.cost - b.cost);
    }
    case "HIGHEST_PRICE": {
      return [...state].sort((a, b) => b.cost - a.cost);
    }
    default: {
      return state;
    }
  }
}
