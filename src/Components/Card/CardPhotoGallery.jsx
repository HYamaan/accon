import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaSearchPlus } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const CardPhotoGallery = ({data,setOpen}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleCaptionClick = () => {
        if (isMobile) {
            setOpen(true);
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                <div className="caption-item" onClick={handleCaptionClick}>
                    <div className="caption-photo">
                        <LazyLoadImage
                            alt={data.url}
                            src={data.url}
                            effect="blur"
                        />
                        {!isMobile && (
                            <div className="caption-box">
                                <div className="caption-bg"></div>
                                <div className="caption-icon" onClick={() => setOpen(true)}>
                                    <FaSearchPlus />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="caption-text">
                        <p>{data.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardPhotoGallery;
