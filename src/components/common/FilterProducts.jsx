import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ProductsContext } from "../../context";
import { useFetchCategory } from "../../hooks";

export default function FilterProducts() {
  const { data: categories } = useFetchCategory();
  const { handleFilter, closeFilter } = useContext(ProductsContext);

  const brands = ["Apple", "Samsung", "OPPO", "Huawei", "Infinix"];

  return (
    <div className=" bg-white py-5 px-4 h-full space-y-4 shadow relative">
      <div className="absolute top-4 right-4 ">
        <MdOutlineClose onClick={closeFilter} size={20} />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-500 text-lg border-b">
          Price range:{" "}
        </h3>
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => handleFilter("minPrice", e.target.value)}
            type="number"
            min="0"
            max="2000"
            defaultValue="0"
            className="w-24 bg-gray-200 rounded-lg outline-none p-2"
          />
          <span>To</span>
          <input
            onChange={(e) => handleFilter("maxPrice", e.target.value)}
            type="number"
            min="0"
            max="2000"
            defaultValue="2000"
            className="w-24 bg-gray-200 rounded-lg outline-none p-2"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-500 text-lg border-b">Ratting:</h3>
        <input
          onChange={(e) => handleFilter("rating", e.target.value)}
          type="range"
          min="1"
          max="5"
          step=".5"
          defaultValue="1"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-500 text-lg border-b">Brands: </h3>
        {brands.map((brand, index) => (
          <label key={index} className=" flex items-center cursor-pointer ">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-600"
              name="brand"
              value={brand}
              // checked={selectedBrand === brand}
              // onChange={() => handleBrandChange(brand)}
              onChange={(e) => handleFilter("brand", e.target.value)}
            />
            <span className="ml-2">{brand}</span>
          </label>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-500 text-lg border-b">
          Categories:{" "}
        </h3>
        {categories?.slice(0, 10)?.map((cat, index) => (
          <label key={index} className=" flex items-center cursor-pointer ">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-600"
              name="cat"
              value={cat}
              // checked={selectedBrand === brand}
              onChange={(e) => handleFilter("category", e.target.value)}
            />
            <span className="ml-2 capitalize">{cat}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
