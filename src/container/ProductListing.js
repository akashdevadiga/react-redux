import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });
  //     dispatch(setProducts(response.data));
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
