import React, { Component } from 'react';
import axios from 'axios';
import Filas from './Filas';
import Pagination from 'react-bootstrap/Pagination';

class TravelTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      viajes: [],
      currentPage: 1,
      totalPages: null
    }
  }

  //ciclo
  componentDidMount() {
    this.getViajesList(this.state.currentPage);
  }

  //coger lista
  getViajesList = (page) => {
    let self = this;
    axios.get(`/get/viajes/list/all?page=${page}`).then(function (response) {
      self.setState({
        viajes: response.data.data,
        currentPage: response.data.current_page,
        totalPages: response.data.last_page
      });
      console.log(response.data);
    });
  }

  handlePageChange = (pageNumber) => {
    this.getViajesList(pageNumber);
  }

  render() {
    return (
        
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
              <h1 className="text-center">Viajes disponibles</h1>
              </div>
              <div className="card-body">
              <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="12%">#</th>
                  <th scope="col" width="12%">Origen</th>
                  <th scope="col" width="12%">Destino</th>
                  <th scope="col" width="12%">Fecha</th>
                  <th scope="col" width="12%">Hora</th>
                  <th scope="col" width="12%">Precio</th>
                  <th scope="col" width="12%">Asientos</th>
                  <th scope="col" width="12%">Creación</th>
                  <th scope="col" width="12%"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.viajes.map(function(x,i){
                  return <Filas key={i} data={x} />
                })}
                
              </tbody>
            </table>
            <div className="pagination justify-content-center">
              <Pagination
                activePage={this.state.currentPage}
                itemsCountPerPage={10}
                totalItemsCount={this.state.totalPages * 10}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelTable;