import React from 'react';
//componentes
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.jsx';
const Search = ({ travelTable }) => {
  return (
    <>
        <Navigation />
      <h1 className='text-center'>Viajes Disponibles</h1>
      {travelTable}
      <Footer/>
    </>
  );
};

export default Search;