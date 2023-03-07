import React from 'react';
import TableActionButtons from './TableActionButtons';

function Filas(props) {
  const createDate = (date) => {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    return `${anio}/${mes}/${dia}`;
  }
  //se la paso al modal
  const data = {
    id: props.data.id,
    origen: props.data.origin,
    destino: props.data.destination,
    fecha: props.data.date,
    hora: props.data.hour,
  };

  return (
    <tr>
      <th>{props.data.id}</th>
      <td>{props.data.origin}</td>
      <td>{props.data.destination}</td>
      <td>{createDate(props.data.date)}</td>
      <td>{props.data.hour}</td>
      <td>{props.data.price}</td>
      <td>{props.data.seats}</td>
      <td>{createDate(props.data.created_at)}</td>
      <td>
        <TableActionButtons data={props.data} />
      </td>
    </tr>
  )
}

export default Filas;