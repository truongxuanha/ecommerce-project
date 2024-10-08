import React from "react";
import { ProductsType } from "../../types";
import { getInFoProduct } from "../../api/product";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  products: ProductsType[];
  setSearchQuery: (query: string) => void;
  handleCloseNav?: (open: boolean) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  products,
  setSearchQuery,
  handleCloseNav,
}) => {
  async function handleInfo(slug: ProductsType["slug"]) {
    await getInFoProduct(slug);
    setSearchQuery("");
    if (handleCloseNav) {
      handleCloseNav(false);
    }
  }

  return (
    <ul className='max-h-80 overflow-y-auto scroll transition-all'>
      {products.map((product) => (
        <li
          key={product.id}
          className='p-2 hover:bg-orange-100 cursor-pointer border-b last:border-none'
        >
          <Link
            to={`/san-pham/${product.product_slug}`}
            className='text-sm cursor-pointer'
          >
            <span className='flex'>
              <img className='w-10 rounded-full' src={product.thumbnail} />
              <p>
                {product.name} - {product.price.toLocaleString()} VND
              </p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
