// This help ti filter only the uniques produsts

export default function uniquesProdusts(products) {
  const uniques = products.reduce(reducer, []);
  return uniques;
}

function reducer(acc, product) {
  if (acc.find((p) => p.name === product.name)) {
    // This takes count of the number of times a product is added to the cart
    const index = acc.findIndex((p) => p.name === product.name);
    acc[index] = { ...acc[index], amount: acc[index].amount + 1 };
    return acc;
  }
  acc.push({ ...product, amount: 1 });
  return acc;
}
