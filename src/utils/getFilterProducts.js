const getFilterProducts = (data, filters) => {
  const filterData = data
    ?.filter((p) => {
      if (
        parseFloat(p?.price) >= parseFloat(filters?.minPrice) &&
        parseFloat(p?.price) <= parseFloat(filters?.maxPrice)
      ) {
        return p;
      }
    })
    ?.filter((p) => {
      if (filters?.brand) {
        return p?.brand.toLowerCase() === filters.brand.toLowerCase();
      }
      return p;
    })
    .filter((p) => {
      if (filters?.category) {
        return p?.category.toLowerCase() === filters.category.toLowerCase();
      }
      return p;
    })
    ?.filter((p) => {
      if (parseFloat(p?.rating) >= parseFloat(filters?.rating)) {
        return p;
      }
    });

  return filterData;
};

export default getFilterProducts;
