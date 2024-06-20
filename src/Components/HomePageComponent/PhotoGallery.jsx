import React from 'react';
import CardPhotoGallery from "@/Components/Card/CardPhotoGallery";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
const PhotoGallery = () => {
    const photoJson = [
        {
            url:'photo-1.jpg',
            name:'Photo 1'
        },
        {
            url:'photo-2.jpg',
            name:'Photo 2'
        },
        {
            url:'photo-3.jpg',
            name:'Photo 3'
        },
        {
            url:'photo-4.jpg',
            name:'Photo 4'
        },
        {
            url:'photo-5.jpg',
            name:'Photo 5'
        },
        {
            url:'photo-6.jpg',
            name:'Photo 6'
        },
        {
            url:'photo-7.jpg',
            name:'Photo 7'
        },
        {
            url:'photo-8.jpg',
            name:'Photo 8'
        },
    ]
   return  <>
       <div className="container pb-5">
           <div className="headline">
               <h2>PHOTO GALLERY</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate</p>
           </div>
        <div className="row">
            {photoJson.map((photo,index) => {
                return <CardPhotoGallery key={index} data={photo}/>
            })}
        </div>
       </div>
   </>
};

export default PhotoGallery;
