import TableActionButtons from './TableActionButtons';
import { Button, } from "react-bootstrap";

function Filas(props) {
  const createDate = (date) => {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    return `${anio}/${mes}/${dia}`;
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Travel Information:</h1>
              <Button variant="btn" data-bs-dismiss="modal" aria-label="Cancel" className="me-4 btn">X</Button>
            </div>
            <div className="modal-body">
              <p><strong>origin: </strong>{props.data.origin}</p>
              <p><strong>destination: </strong>{props.data.destination}</p>
              <p><strong>date: </strong>{createDate(props.data.date)}</p>
              <p><strong>hour: </strong>{props.data.hour}</p>
              <p><strong>price: </strong>{props.data.price}</p>
              <p><strong>seats: </strong>{props.data.seats}</p>
              <p><strong>createdat: </strong>{createDate(props.data.created_at)}</p>

            </div>
          </div>
        </div>
      </div>

      <tr>
        <th scope="col-auto">{props.data.id}</th>
        <td scope="col-auto">{props.data.origin}</td>
        <td scope="col-auto">{props.data.destination}</td>
        <td scope="col-auto">{createDate(props.data.date)}</td>
        <td scope="col-auto">{props.data.price}</td>
        <td scope="col-auto">
          <TableActionButtons eachRowId={props.data.id} />
        </td>
      </tr></>
  );
}

export default Filas;