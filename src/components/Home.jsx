import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
  const { product, loading, error } = useContext(ProductContext);
  console.log(product);

  return (
    <div className="flex">
      <Filter />

      <div className="flex w-[78%] p-[20px] flex-wrap justify-around mt-24">
        {product?.map((prod) => (
          <SingleProduct product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
