import React, { useState } from "react";

//componentes
// import Dashboard from '../components/Dashboard';
import Navigation from '../components/Navigation';
import MisViajes from '../components/misviajes/conductor/MisViajes';
import MisViajesPasajero from '../components/misviajes/pasajero/MisViajesPasajero';
import Footer from '../components/Footer.jsx';
import { dibujaFlash } from '../Helper';

export default function Initiated() {
    let component;
    const [change, setChange] = useState(false);
    function cambiaPasajeroConductor() {
        setChange(!change);
    }

    if (change == false) {
        component = <MisViajes changing={cambiaPasajeroConductor} />;
    } else if (change == true) {
        component = <MisViajesPasajero changing={cambiaPasajeroConductor} />;
    }

    return (
        <>
            <Navigation />
            {dibujaFlash()}
            {component}
            <Footer />
        </>
    )
}
