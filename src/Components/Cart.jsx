import React from "react";
import { images } from "../data";
import delet from "../images/icon-delete.svg";
import Button from "./Button";
const Cart = ({ count, setCount, setCart, id, setOpen }) => {
    const result = (125.0 * count).toFixed(2);
    const handleClick = () => {
        setOpen(false);
    };
    const handleDelet = () => {
        setCart(0);
        setCount(0);
        setOpen(false);
    };
    return (
        <div className="cart">
            <div className="cart-header">
                <h3>Cart</h3>
            </div>
            {count > 0 ? (
                <>
                    <div className="cart-body d-flex ">
                        <figure className="thumbnail">
                            <img
                                src={images[id - 1].thumbnail}
                                alt="sneakers"
                            />
                        </figure>
                        <div>
                            <p>Fall Limited Edition Snearkers</p>
                            <p>
                                $125.00 x {count} <strong>${result}</strong>{" "}
                            </p>
                        </div>
                        <img
                            src={delet}
                            alt="trash"
                            className="delet"
                            onClick={handleDelet}
                        />
                    </div>
                    <div className="cart-footer">
                        <Button handleClick={handleClick}>Checkout</Button>
                    </div>
                </>
            ) : (
                <div className="cart-body h-20 d-flex align-items-center flex-column justify-content-center ">
                    <p className="text-center mx-auto fw-700">
                        Your cart is empty.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
