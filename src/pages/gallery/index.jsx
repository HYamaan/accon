import React from 'react';
import CardPhotoGallery from "@/Components/Card/CardPhotoGallery";
import {photoJson} from "@/data/photoJson";
const Index = () => {
    return <>
        <div className="banner-slider" style={{
            backgroundImage: "url(banner_service.jpg)",
        }}>
            <div className="bg"></div>
            <div className="banner-text">
                <h1>Gallery</h1>
            </div>
        </div>
        <div className="photo-gallery-section pb-5 pt-5">
            <div className="container photo-gallery pb-3">
                <div className="row">
                    {photoJson.map((photo, index) => {
                        return <CardPhotoGallery key={index} data={photo}/>
                    })}
                </div>
            </div>
        </div>
    </>
};

export default Index;
