// This help ti filter only the uniques produsts

export default function uniquesProdusts(products) {
  const uniques = products.reduce(reducer, []);
  return uniques;
}

function reducer(acc, product) {
  if (acc.find((p) => p.name === product.name)) {
    return acc;
  }
  acc.push(product);
  return acc;
}
