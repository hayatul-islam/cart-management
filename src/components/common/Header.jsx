import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Header() {
  const { handleSearchQuery, searchQuery, handleSkip } =
    useContext(ProductsContext);
  const [inputValue, setInputValue] = useState(searchQuery);

  const doSearch = useDebounce((term) => {
    handleSearchQuery(term);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleSkip(0);
    doSearch(value);
  };

  return (
    <header className="bg-primary sticky top-0 py-3">
      <div className="container px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            Ecommerce
          </Link>
        </div>
        <div className="flex items-center space-x-4 max-w-lg w-full">
          <input
            onChange={handleChange}
            defaultValue={searchQuery}
            type="text"
            placeholder="Search"
            className="bg-gray-700 w-full rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Login
          </button>

          <button className="text-gray-300 hover:text-gray-200">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
