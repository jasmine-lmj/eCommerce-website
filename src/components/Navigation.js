const Navigation = (props)=>{ 
    
    return(
        <>
        <nav className="wrapper">
            <h1>LMJ</h1>
            <div>
                <i className="fa fa-light fa-cart-shopping"></i>
                <span className="counter">{props.cartItem}</span>
            </div>
        </nav>
        </>
    );
}

export default Navigation;