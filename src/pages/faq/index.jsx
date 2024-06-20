import React from 'react';
import Faq from "@/Components/HomePageComponent/FAQ";

const Index = () => {
    return <>
        <div className="banner-slider" style={{
            backgroundImage: "url(banner_service.jpg)",
        }}>
            <div className="bg"></div>
            <div className="banner-text">
                <h1>Service</h1>
            </div>
        </div>
          <Faq/>
    </>
};

export default Index;
