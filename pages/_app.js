import "../styles/globals.css";
import Layout from "../components/layout";
import { ProductsProvider } from "../context/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductsProvider>
  );
}

export default MyApp;
