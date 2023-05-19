const Navigation = (props)=>{ 
    
    return(
        <>
        <nav>
            <h2>Cool Little Shop</h2>
            <div>
                <i className="fa fa-light fa-cart-shopping"></i>
                <span className="counter">{props.cartItem}</span>
            </div>
        </nav>
        </>
    );
}

export default Navigation;