import React from 'react';
import cardJson from "@/data/service";
import Card from "@/Components/Card/Card";

const Service = () => {
    return <>
        <div className="banner-slider" style={{
            backgroundImage:"url(banner_service.jpg)",
        }}>
            <div className="bg"></div>
            <div className="banner-text">
                <h1>Service</h1>
            </div>
        </div>
        <section className="services-section">
            <div className="container services">
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

export default Service;
