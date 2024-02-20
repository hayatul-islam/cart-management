import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import { ProductsContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Header() {
  const { handleSearchQuery, searchQuery, handleSkip, cartData } =
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
    <header className="bg-black shadow-md sticky top-0 py-3 z-[999]">
      <div className="container px-4 py-2 flex gap-6 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="h-[40px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 max-w-lg w-full">
          <div class="relative w-full">
            <div class="absolute inset-y-0 end-2 flex items-center pe-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={handleChange}
              defaultValue={searchQuery}
              type="text"
              placeholder="Search..."
              className="w-full rounded-md text-white px-3 py-2 bg-transparent border borer-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link to="/add-to-cart" className="relative">
            <FaCartShopping className="text-white hidden md:block" size={30} />
            {cartData?.length > 0 && (
              <div className=" absolute top-0 right-0">
                <p className="text-red-500 font-bold bg-white shadow w-[15px] h-[15px] rounded-full flex justify-center items-center text-[14px]">
                  {cartData?.length}
                </p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
