import Card from "./card";

export default function Products({ products }) {
  return (
    <section>
      {products.map((item) => (
        <Card product={item} />
      ))}
      <style jsx>{`
        section {
          display: flex;
          gap: 1em;
          flex-wrap: wrap;
          max-width: 1176px;

          margin: 2rem auto;
        }
      `}</style>
    </section>
  );
}
