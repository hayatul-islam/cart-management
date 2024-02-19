const getFindProduct = (products, id) => {
  const findData = products.find((p) => p?.id === Number(id));

  return findData;
};

export default getFindProduct;
