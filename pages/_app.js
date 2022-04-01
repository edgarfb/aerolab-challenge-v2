import "../styles/globals.css";
import Layout from "../components/layout";
import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
