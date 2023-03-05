import React, { Component } from 'react';
import axios from 'axios';
import Filas from './misviajes/Filas';
import Filas from './Filas';
class Table extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      viajes: [],
    }
  }

  //ciclo
  componentDidMount() {
    this.getViajesList();
  }

  //coger lista
  getViajesList = () => {
    let self = this;
    axios.get('/get/viajes/list').then(function (response) {
      self.setState({
        viajes: response.data
      });
      console.log(response.data);
    });
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;