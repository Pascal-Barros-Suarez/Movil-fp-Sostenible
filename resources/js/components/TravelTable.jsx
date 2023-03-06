import React, { Component } from 'react';
import axios from 'axios';
import Filas from './viajes/Filas';
import ReactPaginate from 'react-paginate';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viajes: [],
      currentPage: 0,
      
    }
    
  }

  componentDidMount() {
    this.getViajesList();
  }

  getViajesList = () => {
    axios.get('/get/viajes/list/all/').then(response => {
      this.setState({
        viajes: response.data,
      });
    });
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({
      currentPage: selected,
    });
  }
  render() {
    
    const { viajes, currentPage } = this.state;
    const itemsPerPage = 10;
    const pagesVisited = currentPage * itemsPerPage;

    const displayViajes = viajes.slice(pagesVisited, pagesVisited + itemsPerPage).map(function (x, i) {
      return <Filas key={i} data={x} />
    });

    const pageCount = Math.ceil(viajes.length / itemsPerPage);

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Viajes disponibles</h1>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <MDBTable hover>
                    <MDBTableHead>
                      <tr>
                        <th scope="col" width="12%">#</th>
                        <th scope="col" width="12%">Origen</th>
                        <th scope="col" width="12%">Destino</th>
                        <th scope="col" width="12%">Fecha</th>
                        <th scope="col" width="12%">Hora</th>
                        <th scope="col" width="12%">Precio</th>
                        <th scope="col" width="12%">Asientos</th>
                        <th scope="col" width="12%">Creación</th>
                        <th scope="col" width="12%" ></th>
                        
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
                    onPageChange={this.handlePageClick}
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
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Table;