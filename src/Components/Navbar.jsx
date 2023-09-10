import React, { useState } from "react";
import cartImage from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import close from "../images/icon-close.svg";
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import Cart from "./Cart";
const Navbar = ({ count, setCart, setCount, id }) => {
    const [open, setOpen] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <nav className="navbar container d-flex align-items-center justify-content-between">
                <div className="navbar-right d-flex align-items-center ">
                    <img
                        src={menu}
                        alt="bars"
                        className="menu"
                        onClick={() => setOpenNav(true)}
                    />
                    <div className="d-flex align-items-center gap-2">
                        <img src={logo} alt="logo" className="img-fluid" />
                        <ul className="d-flex gap-1 align-items-center navList">
                            <li>Collections</li>
                            <li>men</li>
                            <li>women</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-left d-flex align-items-center gap-1">
                    <div
                        className="cart_container"
                        onClick={() => setOpen((is) => !is)}
                    >
                        {count !== 0 && <span className="count">{count}</span>}
                        <img
                            src={cartImage}
                            alt="shopping cart"
                            className="img-fluid shoppingCart"
                        />
                    </div>
                    <img
                        src={avatar}
                        alt="avatar"
                        className="img-fluid avatar"
                    />
                </div>
            </nav>
            <div className={`mobile-navbar ${openNav ? "active" : null}`}>
                <div className="list">
                    <img
                        src={close}
                        alt="close"
                        className="close"
                        onClick={() => setOpenNav(false)}
                    />
                    <ul className="d-flex gap-1 align-items-center">
                        <li>Collections</li>
                        <li>men</li>
                        <li>women</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
            {open && (
                <Cart
                    count={count}
                    setCart={setCart}
                    setCount={setCount}
                    id={id}
                    setOpen={setOpen}
                />
            )}
        </>
    );
};

export default Navbar;
