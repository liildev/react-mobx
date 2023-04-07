import { star } from "../../../assets";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks";
import { Fragment } from "react";
import { Loader } from "../../../components";

const Details = observer(() => {
  const { id } = useParams();
  const { productsStore } = useProduct(id);

  const { title, price, rating, image, category, description } =
    productsStore.getProduct;

  if (productsStore.getError)
    return <p>Something went wrong, try again later</p>;
  return (
    <Fragment>
      {productsStore.getLoading.product ? (
        <Loader />
      ) : (
        <div className="flex items-start gap-x-5">
          <div className="w-1/2">
            <h2>{title}</h2>

            <p className="my-3 text-lg">{category}</p>

            <p className="font-normal text-gray-700">{description}</p>

            <div className="flex items-center gap-x-2 my-5">
              <img src={star} className="w-8 h-8" alt="Star" />
              <b>{rating.rate}</b>
            </div>

            <strong>{price}$</strong>
          </div>

          <div className="w-1/2">
            <img
              src={image}
              className="h-96 w-full object-contain"
              alt={title}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
});

export default Details;
