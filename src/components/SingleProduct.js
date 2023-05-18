import { useState } from "react";
const SingleProduct =({productDetail})=>{
    const [cartItem, setCartItem]=useState(0)
    // const [addProduct, setAddProduct]= useState(false)
    // const [removeProduct, setRemoveProduct]= useState(false)
    const increase = ()=>{
        setCartItem( cartItem + 1) ;
    }
    
    const decrease=()=>{
        if (cartItem > 0){
            setCartItem(cartItem - 1);
        }
    }

    return(
        <>
        <div className="productDetail">
            <div className="imageContainer">
                <img className="image"src={productDetail.image} />
            </div>
            <p>{productDetail.title}</p>
            <p>{`$`}{productDetail.price}</p>
            <button onClick={decrease}><i class="fa fa-light fa-circle-minus"></i></button>
            <span className="counter">{cartItem}</span>            
            <button onClick={increase}><i class="fa fa-light fa-circle-plus"></i></button>            
            
        </div>
        </>
    );
}

export default SingleProduct;