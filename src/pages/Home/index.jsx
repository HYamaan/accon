import React from 'react';
import SliderComponent from "@/Components/Slider/SliderComponent";
import ChooseUs from "@/Components/HomePageComponent/ChooseUs";
import Services from "@/Components/HomePageComponent/Services";
import PortFolio from "@/Components/HomePageComponent/PortFolio";
import Experience from "@/Components/HomePageComponent/Experience";
import TestimonialArea from "@/Components/HomePageComponent/TestimonialArea";

const HomePage = () => {

    return <main>
        <SliderComponent/>
        <ChooseUs/>
        <Services/>
        <PortFolio/>
        <Experience/>
        <TestimonialArea/>
    </main>

};

export default HomePage;
