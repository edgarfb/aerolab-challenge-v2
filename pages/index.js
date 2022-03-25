import Head from "next/head";
import MainImage from "../components/main-image";
import ProductSorterBar from "../components/product-sorter";
import Products from "../components/products";
import { useReducer } from "react";

export default function Home({ productsProps }) {
  const [products, dispatch] = useReducer(productsReducer, productsProps);

  return (
    <>
      <Head>
        <title>Aerolab Coding Challenge</title>
      </Head>
      <MainImage />
      <ProductSorterBar setdispatch={dispatch} />
      <Products products={products} />
    </>
  );
}

// for production build
export async function getStaticProps() {
  const res = await fetch("https://coding-challenge-api.aerolab.co/products", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
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
