import React, { useState, useEffect } from 'react';
import Filas from './Filas';
import { Container, Card, Button, Col } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function MisViajesPassenger(props) {

  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getViajesList();
  }, []);

  const getViajesList = () => {
    fetch('/bookings')
      .then(response => {
        console.log(response); // log the response object
        return response.json();
      })
      .then(data => {
        console.log(data);
        const bookingsWithDetails = data.bookings.map(function (booking) {
          return {
            id: booking.id,
            hour: booking.hour,
            price: booking.price,
            seats: booking.seats,
            travelData: {
              origin: booking.origin,
              destination: booking.destination,
              date: booking.date,
              hour: booking.hour, // Use 'hour' property instead of 'time'
            },
          };
        });
        setBookings(bookingsWithDetails);
      })
      .catch(error => {
        console.log('Error fetching bookings data: ', error);
      });
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  }

  const itemsPerPage = 10;
  const pagesVisited = currentPage * itemsPerPage;
  const pageCount = Math.ceil(bookings.length / itemsPerPage);
  const displayViajes = bookings.slice(pagesVisited, pagesVisited + itemsPerPage).map(function (booking, index) {
    return (
      <tr key={index}>
        <td>{booking.id}</td>
        <td>{booking.travelData.origin}</td>
        <td>{booking.travelData.destination}</td>
        <td>{booking.travelData.date}</td>
        <td>{booking.travelData.hour}</td>
        <td>
          <a href={'/bookings/' + booking.id}><i className="bi bi-eye" /></a>
        </td>
      </tr>
    );
  });

  console.log(displayViajes); // log the bookings array being displayed


  return (
    <>
      <div className='mt-4 d-flex justify-content-center'>
        <Button type="btn" aria-label="Driver" className=" me-1 btn-sm btn-primary" onClick={props.changing} >Driver</Button>
        <Button type="btn" aria-label="Passenger" className="  me-4 btn-sm btn-primary disabled" onClick={props.changing} >Passenger</Button>
      </div>
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-11">
            <Card className=" mb-4">
              <div className="card-header">
                <h1 className="text-center">My Travels as a <small className="text-muted"><u>Passenger</u></small></h1>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <MDBTable hover className='table table-striped table-hover align-middle'>
                    <MDBTableHead>
                      <tr>
                        <th scope="col-auto" >#</th>
                        <th scope="col-auto" >Origin</th>
                        <th scope="col-auto" >Destination</th>
                        <th scope="col-auto" >Date</th>
                        <th scope="col-auto" >Hour</th>
                        <th scope="col-auto" >Actions</th>
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

export default MisViajesPassenger;