import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const ProductPage = ()=>{
const [productData, setProductData] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const dataObject = await response.json();
    setProductData(dataObject);
    console.log(dataObject)
    };
    fetchProducts();
}, []);

    return(
        <ul className="productPageContainer wrapper">
            {
                (productData.map((product)=>{
                    return(
                    <li className="singleProductContainer"key={product.id}>
                        <SingleProduct productDetail={product}/>
                    </li> 
                    )
                })) 
        }
        </ul>
    )

}
export default ProductPage; 
