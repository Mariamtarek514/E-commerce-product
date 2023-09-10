import React from "react";
import cartImage from "../images/icon-cart-white.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import Button from "./Button";
const AddToCart = ({ handleAdd, handleMinus, cart, setCount }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(cart);
    };
    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="addToCart d-flex align-items-center"
        >
            <div className="cartCounter d-flex align-items-center">
                <img src={minus} alt="minus" onClick={handleMinus} />
                <span>{cart}</span>

                <img src={plus} alt="plus" onClick={handleAdd} />
            </div>
            <Button>
                <img
                    src={cartImage}
                    alt="cart"
                    className="img-fluid shoppingCart"
                />
                Add to cart
            </Button>
        </form>
    );
};

export default AddToCart;
