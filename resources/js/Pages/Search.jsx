
import React from "react";
//import './Example';

//componentes
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.jsx';
import Table from "../components/TravelTable";
import Buscador from "../components/Buscador";

export default function Initiated() {
  return (
    <>
      <Navigation />
      <Buscador/>
      <Table/>
      <Footer />
    </>
  )
}
