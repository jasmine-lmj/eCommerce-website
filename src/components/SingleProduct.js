import { useState } from "react";
const SingleProduct =({productDetail})=>{
    const [cartItem, setCartItem]=useState(0)
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
        <div>
            <div className="imageContainer">
                <img className="image"src={productDetail.image} />
            </div>
            <p>{productDetail.title}</p>
            <p>{`$`}{productDetail.price}</p>
            <div>
                <button onClick={decrease}><i class="fa fa-light fa-circle-minus"></i></button>
                <span className="counter">{cartItem}</span>            
                <button onClick={increase}><i class="fa fa-light fa-circle-plus"></i></button>         
            </div>   
        </div>    
        
        </>
    );
}

export default SingleProduct;