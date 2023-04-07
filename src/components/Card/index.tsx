import { star } from "../../assets";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

export default function Card({ product }: Props) {
  const { id, title, price, rating, image, category, description } = product;
  
  return (
    <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-1/2">
        <img
          className="rounded-t-lg w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h5>

        <p>{category}</p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-x-2">
          <img src={star} className="w-8 h-8" alt="Star" />
          <b>{rating.rate}</b>
        </div>
        <div className="flex justify-between mt-5">
          <Link
            to={`/products/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>

          <span>{price}$</span>
        </div>
      </div>
    </div>
  );
}
