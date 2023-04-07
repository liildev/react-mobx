import { Fragment } from "react";
import { observer } from "mobx-react";
import { useProducts } from "../../hooks";
import { Card, Loader } from "../../components";

const Product = observer(() => {
  const { productsStore } = useProducts();
  
  if (productsStore.getError)
    return <p>Something went wrong, try again later</p>;

  return (
    <Fragment>
      <h1>Products</h1>

      {productsStore.getLoading.products ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-10">
          {productsStore.getProducts.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>
      )}
    </Fragment>
  );
});

export default Product;
