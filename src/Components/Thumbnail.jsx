import React from "react";

const Thumbnail = ({ image, handleClick, id }) => {
    return (
        <li
            className={id === image.id ? "active" : null}
            onClick={() => handleClick(image.id)}
        >
            <img src={image.thumbnail} alt="thumbnail" className="img-fluid " />
        </li>
    );
};

export default Thumbnail;
