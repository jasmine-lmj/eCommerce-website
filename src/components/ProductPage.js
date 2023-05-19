import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const ProductPage = ({ cart, setCart }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const dataObject = await response.json();
      setProductData(dataObject);
    };
    fetchProducts();
  }, []);

  return (
    <>
        <ul className="productPageContainer wrapper">
            {productData.map((product) => (
            <li className="singleProductContainer" key={product.id}>
                <SingleProduct
                productDetail={product}
                cart={cart}
                setCart={setCart}
                />
            </li>
            ))}
        </ul>
    </>
    );
};

export default ProductPage;
