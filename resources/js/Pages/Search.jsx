import React from 'react';
//componentes
import Navigation from '../components/Navigation';
import TravelTable from '../components/TravelTable.jsx';
import Footer from '../components/Footer.jsx';
const Search = ({ travelTable }) => {
  return (
    <>
        <Navigation />
      <h1 className='text-center'>Viajes Disponibles</h1>
      {travelTable}
      <Search travelTable={<TravelTable />} />
      <Footer/>
    </>
  );
};

export default Search;