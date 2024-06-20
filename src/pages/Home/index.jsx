import React from 'react';
import SliderComponent from "@/Components/Slider/SliderComponent";
import ChooseUs from "@/Components/HomePageComponent/ChooseUs";
import Services from "@/Components/HomePageComponent/Services";
import PortFolio from "@/Components/HomePageComponent/PortFolio";
import Experience from "@/Components/HomePageComponent/Experience";
import TestimonialArea from "@/Components/HomePageComponent/TestimonialArea";
import PhotoGallery from "@/Components/HomePageComponent/PhotoGallery";
import CounterupArea from "@/Components/HomePageComponent/CounterupArea";
import Faq from "@/Components/HomePageComponent/FAQ";

const HomePage = () => {

    return <main>
        <SliderComponent/>
        <ChooseUs/>
        <Services/>
        <PortFolio/>
        <Experience/>
        <TestimonialArea/>
        <Faq/>
        <CounterupArea/>
        <PhotoGallery/>

    </main>

};

export default HomePage;
