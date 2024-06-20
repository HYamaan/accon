import React from 'react';
import SliderTestimonialArea from "@/Components/Slider/SliderTestimonialArea";
import {testimonialJson} from "@/data/testimonialJson";

const Index = () => {
    return <>
        <div className="banner-slider" style={{
            backgroundImage: "url(banner_service.jpg)",
        }}>
            <div className="bg"></div>
            <div className="banner-text">
                <h1>Portfolio</h1>
            </div>
        </div>
        <div className="bg-white py-2 testimonial-page">
            <div className="container my-5">
                <div className="col-md-12">
                <SliderTestimonialArea data={testimonialJson}/>
                </div>
            </div>
        </div>
    </>
};

export default Index;
