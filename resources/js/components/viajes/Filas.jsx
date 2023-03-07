import React, { Component } from 'react';
// import TableActionButtons from './TableActionButtons';
import ModalViajes from '../ModalViajes';



function Filas(props) {

  const createDate = (date) => {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    return `${anio}/${mes}/${dia}`;
  }

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
        <ModalViajes eachRowId={props.data.id} />
      </td>
    </tr>
  )
}

export default Filas;