import React from "react";
import { usePage } from "@inertiajs/react";

//componentes
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import IconsGrid from '../components/IconsGrid';
import ShowCase from '../components/ShowCase';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer.jsx';


export default function Initiated() {
    const { flash } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
    function dibujaflash() {
        let message = flash.success ? <h3 className="h-100 m-0 bg-success fa fa-flash">{flash.success}</h3> : '';
        flash.success = null;
        return message;
    }
    return (
        <>
            <Navigation />
            {dibujaflash()}
            <Header />
            <IconsGrid />
            <ShowCase />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}

