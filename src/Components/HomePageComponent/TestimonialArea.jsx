import React from 'react';
import SliderTestimonialArea from "@/Components/Slider/SliderTestimonialArea";

const TestimonialArea = () => {

    const testimonialJson = [
        {
            url: "testimonial-1.jpg",
            name: "John Doe",
            position: "Managing Director, ABC Inc.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut."
        },
        {
            url: "testimonial-2.jpg",
            name: "Dadiv Smith",
            position: "CEO, SS Multimedia",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut."
        },
        {
            url: "testimonial-3.jpg",
            name: "Stefen Carman",
            position: "Chairman, GH Group",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut."
        },
        {
            url: "testimonial-4.jpg",
            name: "Gary Brent",
            position: "CFO, XYZ It Solution",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo illo corporis nemo consectetur nobis maxime porro obcaecati accusamus, veniam impedit. Soluta esse dolorem saepe architecto similique odit quae ut."
        }
    ]

    return <>
        <div className="testimonial-area"
        style={{backgroundImage: "url(testimonial-main-photo.jpg)"}}
        >
            <div className="bg-testimonial"> </div>
                <div className="container">
                    <div className="row">
                        <div className="testimonial-headline">
                            <h2>WHAT OUR CLIENTS SAY</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate</p>
                        </div>
                        <div className="col-md-12">
                     <SliderTestimonialArea data={testimonialJson}/>
                        </div>
                    </div>
                </div>

        </div>
    </>
};

export default TestimonialArea;
