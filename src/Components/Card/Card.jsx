import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import Link from "next/link";
import {useRouter} from "next/router";

const Card = ({data,baseUrl}) => {
    const router= useRouter();
    const handleRedirect = (url) => {
        router.push(`${baseUrl}/${url}`);
    };

    return (
        <div className="services-item">
            <LazyLoadImage
                alt={data.photo}
                src={data.photo}
                className="services-photo"
            />
            <div className="services-text">
                <h3 onClick={()=>handleRedirect(data.url)}>{data.title}</h3>
                <p  dangerouslySetInnerHTML={{__html: data.description}}>
                </p>
                <div className="services-button">
                    <div onClick={()=>handleRedirect(data.url)} className="secondary-button">
                        Read More
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
