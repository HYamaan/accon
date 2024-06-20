import React, {useState} from 'react';
import Card from "@/Components/Card/Card";
import {portFolioJson} from "@/data/portFolioJson";
const PortfolioFilter = () => {
    const [portfolio,setPortfolio]=useState(portFolioJson)
    const category = ["All", ...new Set(portFolioJson.map(item => item.category))]
    console.log(portFolioJson);
    const filterPortfolio = (category) => {
        console.log(category)
        if (category === "All") {
            setPortfolio(portFolioJson)
        } else {
            const filteredPortfolio = portFolioJson.filter(item => item.category === category)
            setPortfolio(filteredPortfolio)
        }
    }
    return <>
        <div>
            <div className="portfolio-filter">
                <ul>
                    {category?.map((item, index) =>
                        <li key={index} onClick={() => filterPortfolio(item)}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
        <div className="row">
            {portfolio?.map((item, index) =>
                <div key={index} className="col-md-4 col-sm-6 col-xs-12 clear-three">
                    <Card data={item}/>
                </div>
            )}
        </div>
    </>
};

export default PortfolioFilter;
