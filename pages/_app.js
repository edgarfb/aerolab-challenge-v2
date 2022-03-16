import "../styles/globals.css";
import Layout from "../components/layout";
import { ProductsProvider } from "../context/ProductsContext";
import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProductsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductsProvider>
    </UserProvider>
  );
}

export default MyApp;
