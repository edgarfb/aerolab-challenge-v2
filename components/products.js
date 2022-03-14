import Card from "./card";
const fakeData = {
  _id: "5a033f0f364bf301523e9b93",
  name: "iPhone 7 Case Sea-Blue",
  cost: 200,
  category: "Accesorios",
  img: {
    url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
    hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
  },
};

export default function Products() {
  return (
    <section>
      <Card product={fakeData} />
      <Card product={fakeData} />
      <Card product={fakeData} />
      <Card product={fakeData} />
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
