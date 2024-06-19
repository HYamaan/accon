import React, { useState } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: "block",
                position: "absolute",
                top: "50%",
                right: "3rem",
                transform: "translate(0, -50%)",
                zIndex: "100",
                cursor: "pointer" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style,
                display: "block",
                position: "absolute",
                top: "50%",
                left: "1.5rem",
                transform: "translate(0, -50%)",
                zIndex: "100",
                cursor: "pointer" }}
            onClick={onClick}
        />
    );
}

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        }
    };

    const getAnimateClass = (index) => (currentSlide === index ? "animate" : "");

    return (
        <div className="slider-section">
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="slider-section">
                        <img src={"slider-1.jpg"} alt="slider 1"/>
                        <div className={`slider-text ${getAnimateClass(0)}`}>
                            <h3>HELPING BUILD A BETTER FUTURE</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate,
                                veritatis esse doloremque, quos, quidem quibusdam quae quia quod doloribus. Quisquam,
                                quae. Quisquam, quae.
                            </p>
                            <div className="d-md-flex gap-3 justify-content-center">
                                <button className="primary-button">Read More</button>
                                <button className="secondary-button">About</button>
                            </div>
                        </div>
                    </div>
                    <div className="slider-section">
                        <img src={"slider-2.jpg"} alt="slider 2"/>
                        <div className={`slider-text ${getAnimateClass(1)}`}>
                            <h3>HELPING BUILD A BETTER FUTURE</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate,
                                veritatis esse doloremque, quos, quidem quibusdam quae quia quod doloribus. Quisquam,
                                quae. Quisquam, quae.
                            </p>
                            <div className="d-md-flex gap-3 justify-content-center">
                                <button className="primary-button">Read More</button>
                                <button className="secondary-button">About</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
