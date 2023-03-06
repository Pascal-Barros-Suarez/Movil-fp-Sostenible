
import React from "react";
/* import { usePage } from "@inertiajs/react";
let travels = usePage().props; */


//componentes
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.jsx';
import Table from "../components/TravelTable";
import Buscador from "../components/Buscador";

export default function Initiated() {


  return (
    <>
      <Navigation />
      <Buscador />
      <Table />
      <Footer />
    </>
  )
}

/*    import { usePage } from "@inertiajs/react";
    const prop = usePage().props;
    console.log(usePage().props);*/