import React from 'react';
import PortFolioFilter from "@/Components/NotHeader/PortfolioFilter";

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
        <div className="bg-white py-2">
            <div className="container my-5">
                <PortFolioFilter/>
            </div>
        </div>
    </>
};

export default Index;
