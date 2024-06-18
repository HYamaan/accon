import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import Link from "next/link";

const Card = ({data}) => {
    return (
        <div className="services-item">
            <LazyLoadImage
                alt={data.url}
                src={data.url}
                className="services-photo"
            />
            <div className="services-text">
                <h3><Link href="/">{data.title}</Link></h3>
                <p>
                    {data.description}
                </p>
                <div className="services-button">
                    <Link href="/" className="secondary-button">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
