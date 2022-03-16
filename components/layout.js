import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <style jsx global>{`
        .top-5 {
          top: 5px !important;
        }
        .top-4 {
          top: 4px !important;
        }

        .top-2 {
          top: -2px !important;
        }
        .left4 {
          left: 4px !important;
        }
      `}</style>
    </>
  );
}
