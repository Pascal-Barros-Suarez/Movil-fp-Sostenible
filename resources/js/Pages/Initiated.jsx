import React from "react";
//componentes
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import IconsGrid from '../components/IconsGrid';
import ShowCase from '../components/ShowCase';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer.jsx';


export default function Initiated() {
    return (
        <>
            <Navigation />
            <Header />
            <IconsGrid />
            <ShowCase />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}

