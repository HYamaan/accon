import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {PiUserCircleFill} from "react-icons/pi";
import Link from "next/link";

const RecentPostCard = ({data}) => {
    return<>
    <div className="blog-item">
     <LazyLoadImage
         src={data.url}
         alt={data.url}
     effect="blur"
     className="blog-photo"
     />
        <div className="blog-author">
            <div className="blog-gro">
                Posted On:{data.date}
            </div>
            <div className="blog-created">
                <PiUserCircleFill />
               <span> {data.created}</span>
            </div>
        </div>
        <div className="blog-text">
            <h3><Link href={"/"}>Pri et oratio iisque atomorum, enim detracto</Link></h3>
            <p>{data.description}</p>
            <div className="blog-button">
                <Link href={"/"} className="secondary-button">Read More</Link>
            </div>
        </div>
    </div>
    </>
};

export default RecentPostCard;
