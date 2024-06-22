import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {PiUserCircleFill} from "react-icons/pi";
import Link from "next/link";

const RecentPostCard = ({data}) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        setHtmlContent(data.description);
    }, [data.description]);
    return<>
    <div className="blog-item">
     <LazyLoadImage
         src={data.photo}
         alt={data.photo}
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
            <p dangerouslySetInnerHTML={{__html: htmlContent}}></p>
            <div className="blog-button">
                <Link href={`news/${data.url}`} className="secondary-button">Read More</Link>
            </div>
        </div>
    </div>
    </>
};

export default RecentPostCard;
