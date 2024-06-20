import React, {useState} from 'react';
import CardPhotoGallery from "@/Components/Card/CardPhotoGallery";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
const PhotoGallery = () => {
    const [open, setOpen] = useState(false);
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
    const slides = photoJson.map(photo => ({
        src: photo.url,
        downloadUrl: photo.url,
        title: photo.url.split('.')[0]
    }));
   return  <>
       <div className="container pb-5">
           <div className="headline">
               <h2>PHOTO GALLERY</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate</p>
           </div>
        <div className="row">
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Download, Fullscreen,Captions]}
            />
            {photoJson.map((photo,index) => {
                return <CardPhotoGallery key={index} data={photo} setOpen={setOpen}/>
            })}
        </div>
       </div>
   </>
};

export default PhotoGallery;
