import React from 'react';
import Card from "@/Components/Card/Card";

const Services = () => {
    const cardJson = [
        {
            url: "service-1.jpg",
            title: "ENGINEERING & DESIGN",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"
        },
        {
            url: "service-2.jpg",
            title: "INDUSTRY TRAINING",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"

        },
        {
            url: "service-3.jpg",
            title: "PROGRAM MANAGEMENT",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"
        },
        {
            url: "service-4.jpg",
            title: "ANALYTICS & RESEARCH",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"
        },
        {
            url: "service-5.jpg",
            title: "DIGITAL ENTERPRISE",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"
        },
        {
            url: "service-6.jpg",
            title: "HEALTH AND SAFETY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero"
        }
    ]

    return <>
        <section className="services-section">
            <div className="container services">
                <div className="headline">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate</p>
                </div>
                <div className="row">
                    {cardJson.map((item, index) =>
                        <div key={index} className="col-md-4 col-sm-6 col-xs-12 clear-three">
                            <Card data={item}/>
                        </div>
                    )}
                </div>

            </div>
        </section>

    </>
};

export default Services;
