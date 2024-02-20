const getFilterProducts = (data, filters) => {
  const filterCategory = data?.filter((p) => {
    if (filters?.category) {
      return p?.category.toLowerCase() === filters.category.toLowerCase();
    }
    return p;
  });

  const filterBrand = data?.filter((p) => {
    if (filters?.brand) {
      return p?.brand.toLowerCase() === filters.brand.toLowerCase();
    }
    return p;
  });

  const filterPriceRange = data?.filter((p) => {
    if (
      parseFloat(p?.price) >= parseFloat(filters?.minPrice) &&
      parseFloat(p?.price) <= parseFloat(filters?.maxPrice)
    ) {
      return p;
    }
  });

  const filterMinRating = data?.filter((p) => {
    if (parseFloat(p?.rating) >= parseFloat(filters?.rating)) {
      return p;
    }
  });

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
