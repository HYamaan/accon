import React from 'react';
import Slider from "react-slick";
import CardTestimonial from "@/Components/Card/CardTestimonial";

const SliderTestimonialArea = ({data}) => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dotsClass: "slick-dots",
        arrows: false,
    };

    return (
        <div className="slider-team">
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <CardTestimonial
                            key={index}
                           data={item}
                        />
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default SliderTestimonialArea;
