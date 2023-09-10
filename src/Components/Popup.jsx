import React, { useState } from "react";
import Image from "./Image";
import close from "../images/icon-close-colored.svg";

const Popup = ({ setOpenPopup, id }) => {
    const [popupId, setPopupId] = useState(id);
    return (
        <div className="popup">
            <div className="popup_content">
                <div className="popupClose">
                    <img
                        src={close}
                        alt="close"
                        onClick={() => setOpenPopup(false)}
                    />
                </div>
                <Image id={popupId} setId={setPopupId} />
            </div>
        </div>
    );
};

export default Popup;
