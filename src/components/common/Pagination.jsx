import { useContext } from "react";
import { ProductsContext } from "../../context";

export default function Pagination({ total }) {
  const { handleSkip, currentPage, limit } = useContext(ProductsContext);
  const totalPage = Math.floor(total / limit);
  const items = new Array(totalPage).fill(0).map((_, index) => index + 1);

  return (
    <nav className="py-6 ">
      <ul className=" flex justify-center items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => handleSkip("prev")}
            disabled={currentPage == 0}
            className={`flex items-center justify-center px-4 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 0 &&
              "opacity-50 hover:bg-white hover:text-gray-500"
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {items?.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleSkip(item)}
              className={`flex items-center justify-center px-4 h-12 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === item
                  ? "bg-gray-100 text-blue-700 font-medium"
                  : "text-gray-500 bg-white"
              } `}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => handleSkip("next")}
            disabled={currentPage >= items?.length}
            className={`flex items-center justify-center px-4 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 
            hover:text-gray-700 ${
              currentPage >= items?.length &&
              "opacity-50 hover:bg-white hover:text-gray-500"
            } `}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
