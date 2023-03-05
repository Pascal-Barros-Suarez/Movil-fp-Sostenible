import React from "react";
//import './Example';

//componentes
import { usePage } from "@inertiajs/react";
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import IconsGrid from '../components/IconsGrid';
import ShowCase from '../components/ShowCase';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer.jsx';


export default function Initiated() {
    const { flash } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo

    return (
        <>
            <Navigation />
            {flash.message ? <h3 className="h-100 m-0 bg-success">{flash.message}</h3> : null}
            <Header />
            <IconsGrid />
            <ShowCase />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    )
}
