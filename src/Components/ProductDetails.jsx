import React from "react";
import AddToCart from "./AddToCart";

const ProductDetails = ({ count, handleAdd, handleMinus, cart, setCount }) => {
    return (
        <div className="details">
            <div className="info d-flex ">
                <span>Sneaker Company</span>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                <div className="price_container d-flex  ">
                    <div className="price d-flex">
                        <strong>$125.00</strong>
                        <small className="old-price">$250.00</small>
                    </div>
                    <div className="discount badge">50%</div>
                </div>
                <AddToCart
                    handleAdd={handleAdd}
                    handleMinus={handleMinus}
                    cart={cart}
                    count={count}
                    setCount={setCount}
                />
            </div>
        </div>
    );
};

export default ProductDetails;
