import React from 'react';
import {recentPostJson} from "@/data/recentPostJson";
import RecentPostCard from "@/Components/Card/RecentPostCard";

const Index = () => {
    return <>
        <div className="banner-slider" style={{
            backgroundImage: "url(banner_service.jpg)",
        }}>
            <div className="bg"></div>
            <div className="banner-text">
                <h1>News</h1>
            </div>
        </div>
        <div className="testimonial-page">
            <div className="container">
                <div className="row">
                    {recentPostJson.map((item, index) => {
                        return <div key={index} className="col-md-4 col-sm-3">
                            <RecentPostCard data={item}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
};

export default Index;
