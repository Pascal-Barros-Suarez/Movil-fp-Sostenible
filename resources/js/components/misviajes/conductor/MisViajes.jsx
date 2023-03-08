import React, { Component } from 'react';
import axios from 'axios';
import Filas from './Filas';
import { Container, Card } from "react-bootstrap";
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
      <Container>
        <div className="row justify-content-center">

          <div className="col-md-11">
            <Card className=" mb-4">
              <div className="card-header">
                <h1 className="text-center">Mis Viajes como <small className="text-muted"><u>Conductor</u> </small></h1>
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
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default Table;
//////////////////////////////
/*  COMO FUNCION PARA MEJORA FUTURA
function Table() {
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
    <Container>
      {dibujaFlash()}
      <div className="row justify-content-center">
        <div className="col-md-11">
          <Card className=" mb-4">
            <div className="card-header">
              <h1 className="text-center">Mis Viajes</h1>
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
                      <th scope="col-auto">Origen</th>
                      <th scope="col-auto">Destino</th>
                      <th scope="col-auto">Fecha</th>
                      <th scope="col-auto">Hora</th>
                      <th scope="col-auto">Precio</th>
                      <th scope="col-auto">Asientos</th>
                      <th scope="col-auto">Creación</th>
                      <th scope="col-auto">Acciones</th>
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
  );
}

export default Table; */