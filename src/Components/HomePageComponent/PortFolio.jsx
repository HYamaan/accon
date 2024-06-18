import React, {useEffect, useState} from 'react';
import Card from "@/Components/Card/Card";
const portFolioJson = [
    {
        url: "service-1.jpg",
        title: "ENGINEERING & DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Engineering"
    },
    {
        url: "service-2.jpg",
        title: "INDUSTRY TRAINING",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Corporate"
    },
    {
        url: "service-3.jpg",
        title: "PROGRAM MANAGEMENT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Business"
    },
    {
        url: "service-4.jpg",
        title: "ANALYTICS & RESEARCH",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Business"
    },
    {
        url: "service-5.jpg",
        title: "DIGITAL ENTERPRISE",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Corporate"
    },
    {
        url: "service-6.jpg",
        title: "HEALTH AND SAFETY",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptate voluptatum.Deserunt libero",
        category: "Engineering"
    }
];
const category = ["All", "Engineering", "Corporate", "Business"];

const PortFolio = () => {
    const [portfolio,setPortfolio]=useState(portFolioJson)

    const filterPortfolio = (category) => {
        console.log(category)
        if (category === "All") {
            setPortfolio(portFolioJson)
        } else {
            const filteredPortfolio = portFolioJson.filter(item => item.category === category)
            setPortfolio(filteredPortfolio)
        }
    }

    return <section className="portfolio">
        <div className="container">
            <div className="headline">
                <h2>PORTFOLIO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt libero voluptate</p>
            </div>
            <div>
                <div className="portfolio-filter">
                  <ul>
                        {category.map((item, index) =>
                            <li key={index} onClick={()=> filterPortfolio(item)}>
                                {item}
                            </li>
                        )}
                  </ul>
                </div>
            </div>
            <div className="row">
                {portfolio.map((item, index) =>
                    <div key={index} className="col-md-4 col-sm-6 col-xs-12 clear-three">
                        <Card data={item}/>
                    </div>
                )}
            </div>
        </div>

    </section>
};

export default PortFolio;
