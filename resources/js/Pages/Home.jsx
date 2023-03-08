import React from "react";

//componentes
// import Dashboard from '../components/Dashboard';
import Navigation from '../components/Navigation';
import MisViajes from '../components/misviajes/conductor/MisViajes';
import MisViajesPasajero from '../components/misviajes/pasajero/MisViajesPasajero';
import Footer from '../components/Footer.jsx';
import { dibujaFlash } from '../Helper';

export default function Initiated() {

    return (
        <>
            <Navigation />
            {dibujaFlash()}
            <MisViajes />
            <MisViajesPasajero />
            <Footer />
        </>
    )
}
