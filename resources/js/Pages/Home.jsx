import React from "react";
//import './Example';

//componentes
import Navigation from '../components/Navigation';
// import Dashboard from '../components/Dashboard';
import MisViajes from '../components/User-Profile/MisViajes/MisViajes';
import Footer from '../components/Footer.jsx';

export default function Initiated() {
    return (
        <>
            <Navigation />
            <MisViajes />
            <Footer />
        </>
    )
}
