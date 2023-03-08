import React from "react";

//componentes
// import Dashboard from '../components/Dashboard';
import Navigation from '../components/Navigation';
import MisViajes from '../components/misviajes/MisViajes';
import Footer from '../components/Footer.jsx';
import { dibujaFlash } from '../Helper';

export default function Initiated() {

    return (
        <>
            <Navigation />
            {dibujaFlash()}
            <MisViajes />
            <Footer />
        </>
    )
}
