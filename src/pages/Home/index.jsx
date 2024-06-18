import React from 'react';
import SliderComponent from "@/Components/HomePageComponent/SliderComponent";
import ChooseUs from "@/Components/HomePageComponent/ChooseUs";
import Services from "@/Components/HomePageComponent/Services";
import PortFolio from "@/Components/HomePageComponent/PortFolio";

const HomePage = () => {

    return <main>
        <SliderComponent/>
        <ChooseUs/>
        <Services/>
        <PortFolio/>
    </main>

};

export default HomePage;
