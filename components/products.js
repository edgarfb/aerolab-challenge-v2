import Card from "./card";

export default function Products() {
  return (
    <section>
      <Card />
      <Card />
      <Card />
      <Card />
      <style jsx>{`
        section {
          display: flex;
          gap: 1em;
          max-width: 1176px;

          margin: 2rem auto;
        }
      `}</style>
    </section>
  );
}
