import React from "react";
import { usePage } from "@inertiajs/react";


//componentes
import Navigation from '../components/Navigation';
// import Dashboard from '../components/Dashboard';
import MisViajes from '../components/misviajes/MisViajes';
import Footer from '../components/Footer.jsx';

export default function Initiated() {
    const { flash } = usePage().props;

    function dibujaflash() {
        let message = flash.success ? <h3 className="h-100 m-0 bg-success fa fa-flash">{flash.success}</h3> : '';
        flash.success = null;
        return message;
    }
    return (
        <>
            <Navigation />
            {dibujaflash()}
            <MisViajes />
            <Footer />
        </>
    )
}
