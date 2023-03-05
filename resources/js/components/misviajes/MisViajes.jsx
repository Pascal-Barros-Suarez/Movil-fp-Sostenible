import React, { Component } from 'react';
import axios from 'axios';
import Filas from './Filas';
import { Container, Card } from "react-bootstrap";

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
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-11">
            <Card>
              <div className="card-header">
                <h1 className="text-center">Mis Viajes</h1>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className='table table-striped table-hover align-middle'>
                    <thead>
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
                    </thead>
                    <tbody>
                      {this.state.viajes.map(function (x, i) {
                        return <Filas key={i} data={x} />
                      })}

                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default Table;