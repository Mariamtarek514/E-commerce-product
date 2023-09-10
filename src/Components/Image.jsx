import React from "react";
import { images } from "../data";
import Thumbnail from "./Thumbnail";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
const Image = ({ setOpenPopup, id, setId }) => {
    const handleClick = (ID) => {
        setId((img) => (img.id !== ID ? ID : null));
    };

    const handlePrev = () => {
        id > 1 ? setId((pre) => pre - 1) : setId(1);
    };
    const handleNext = () => {
        id < 4 ? setId((next) => next + 1) : setId(4);
    };

    return (
        <div className="image_container">
            <div className="prev" onClick={handlePrev}>
                <img src={previous} alt="previous" />
            </div>

            <>
                <figure onClick={() => setOpenPopup(true)}>
                    <img
                        src={images[id - 1].src}
                        alt="sneakers"
                        className="img-fluid"
                    />
                </figure>
                <ul className="d-flex align-items-center gap-1">
                    {images.map((image) => {
                        return (
                            <Thumbnail
                                key={image.id}
                                image={image}
                                handleClick={handleClick}
                                id={id}
                            />
                        );
                    })}
                </ul>
            </>
            <div className="next" onClick={handleNext}>
                <img src={next} alt="next" />
            </div>
        </div>
    );
};

export default Image;
