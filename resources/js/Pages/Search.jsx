
import React from "react";
//import './Example';

//componentes
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.jsx';
import Table from "../components/TravelTable";

export default function Initiated() {
  return (
    <>
      <Navigation />
      <Table></Table>
      <Footer />
    </>
  )
}
