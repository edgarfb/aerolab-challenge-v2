import Navbar from "./navbar";
import { userData } from "../fake-data/user-data";

console.log(userData);

export default function Layout({ children }) {
  return (
    <>
      <Navbar user={userData}></Navbar>
      <main>{children}</main>
    </>
  );
}
