import Image from "next/image";
import { useProductsContext } from "../context/productsContext";

export default function BtnPAgination() {
  const { initPage, endPage, setInitPage, setEndPage, productsLength } =
    useProductsContext();

  return (
    <div className="btn-pagination">
      <button
        onClick={() => {
          if (initPage === 0) return;

          setInitPage(initPage - 16);
          setEndPage(endPage - 16);
        }}
      >
        <Image
          src="/images/icons/arrow-left.svg"
          alt=""
          width={30}
          height={30}
        />
      </button>
      <button
        onClick={() => {
          if (endPage === productsLength) return;

          setInitPage(initPage + 16);
          setEndPage(endPage + 16);
        }}
      >
        <Image
          src="/images/icons/arrow-right.svg"
          alt=""
          width={30}
          height={30}
        />
      </button>

      <style jsx>
        {`
          .btn-pagination {
          }
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
