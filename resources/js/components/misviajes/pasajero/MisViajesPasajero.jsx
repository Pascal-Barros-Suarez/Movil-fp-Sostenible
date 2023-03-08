import React, { useState, useEffect } from 'react';
import Filas from './Filas';
import { Container, Card, Button, Col, } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';


function MisViajesPasajero(props) {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getViajesList();
  }, []);

  const getViajesList = () => {
    fetch('/api/bookings')
      .then(response => response.text())
      .then(data => {
        console.log(data); // print the response in the console
        setBookings(JSON.parse(data)); // parse the response as JSON
      })
      .catch(error => {
        console.log('Error fetching bookings data: ', error);
      });
  }

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  }

  const itemsPerPage = 10;
  const pagesVisited = currentPage * itemsPerPage;

  const displayViajes = bookings.slice(pagesVisited, pagesVisited + itemsPerPage).map(function (booking, index) {
    return (
      <tr key={index}>
        <td>{booking.id}</td>
        <td>{booking.origin}</td>
        <td>{booking.destination}</td>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.price}</td>
        <td>{booking.seats}</td>
        <td>{booking.created_at}</td>
        <td>
          <a href={'/bookings/' + booking.id}>Ver</a>
        </td>
      </tr>
    );
  });

  const pageCount = Math.ceil(bookings.length / itemsPerPage);

  return (
    <>
    <div className='mt-4 d-flex justify-content-center'>
      <Button type="btn" aria-label="Conductor" className=" me-1 btn-sm btn-primary" onClick={props.changing} >Conductor</Button>
      <Button type="btn" aria-label="Pasajero" className="  me-4 btn-sm btn-primary disabled" onClick={props.changing} >Pasajero</Button>
    </div>
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-11">
          <Card className=" mb-4">
            <div className="card-header">
              <h1 className="text-center">Mis Viajes como <small className="text-muted"><u>Pasajero</u> </small></h1>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <MDBTable hover className='table table-striped table-hover align-middle'>
                  <MDBTableHead>
                    <tr>
                      <th scope="col-auto" >#</th>
                      <th scope="col-auto" >Origen</th>
                      <th scope="col-auto" >Destino</th>
                      <th scope="col-auto" >Fecha</th>
                      <th scope="col-auto" >Hora</th>
                      <th scope="col-auto" >Precio</th>
                      <th scope="col-auto" >Asientos</th>
                      <th scope="col-auto" >Creación</th>
                      <th scope="col-auto" >Acciones</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {displayViajes}
                  </MDBTableBody>
                </MDBTable>
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
    </>
  );
}

export default MisViajesPasajero;