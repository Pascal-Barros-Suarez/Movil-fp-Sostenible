import React, { Component } from 'react';
import axios from 'axios';
import Filas from './Filas';
import { Container, Card, Button, Col, } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';


function Table(props) {
  const [viajes, setViajes] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    getViajesList();
  }, []);

  const getViajesList = () => {
    axios.get('/get/viajes/list').then(function (response) {
      setViajes(response.data);
    });
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };

  const itemsPerPage = 10;
  const pagesVisited = currentPage * itemsPerPage;
  const displayViajes = viajes
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map(function (x, i) {
      return <Filas key={i} data={x} />;

    });

  const pageCount = Math.ceil(viajes.length / itemsPerPage);

  return (
    <>


      {/* botones */}
      <div className='mt-4 d-flex justify-content-center'>
        <Button type="btn" aria-label="Driver" className=" me-1 btn-sm btn-primary disabled" onClick={props.changing} >Driver</Button>
        <Button type="btn" aria-label="Passenger" className="  me-4 btn-sm btn-primary" onClick={props.changing} >Passenger</Button>
      </div>

      <Container>
        <div className="row justify-content-center">
          <div className="col-md-11">
            <Card className=" mb-4">
              <div className="card-header">
                <h1 className="text-center">My Trips as a <small className="text-muted"><u>Driver</u></small></h1>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <MDBTable
                    hover
                    className="table table-striped table-hover align-middle"
                  >
                    <MDBTableHead>
                      <tr>
                        <th scope="col-auto">#</th>
                        <th scope="col-auto">Origin</th>
                        <th scope="col-auto">Destination</th>
                        <th scope="col-auto">Date</th>
                        <th scope="col-auto">Price</th>
                        <th scope="col-auto">Actions</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>{displayViajes}</MDBTableBody>
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

export default Table;