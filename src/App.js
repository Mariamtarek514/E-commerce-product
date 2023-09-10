import { useState } from "react";
import Image from "./Components/Image";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import ProductDetails from "./Components/ProductDetails";

function App() {
    const [openPopup, setOpenPopup] = useState(false);
    const [id, setId] = useState(1);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);
    const handleAdd = () => {
        setCart((cur) => cur + 1);
    };
    const handleMinus = () => {
        cart > 0 && setCart((cur) => cur - 1);
    };
    return (
        <div className="App">
            <Navbar
                count={count}
                setCart={setCart}
                setCount={setCount}
                id={id}
            />

            <div className="container mt-3 content d-flex justify-content-between">
                <Image setOpenPopup={setOpenPopup} id={id} setId={setId} />

                <ProductDetails
                    count={count}
                    handleMinus={handleMinus}
                    handleAdd={handleAdd}
                    cart={cart}
                    setCount={setCount}
                />
            </div>
            {openPopup && <Popup setOpenPopup={setOpenPopup} id={id} />}
        </div>
    );
}

export default App;
