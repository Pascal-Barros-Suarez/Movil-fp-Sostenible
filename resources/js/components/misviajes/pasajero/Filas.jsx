import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class Filas extends Component {
  static createDate(date) {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    return `${anio}/${mes}/${dia}`;
  }

  render() {
    const { id, origin, destination, date, hour, price, seats, created_at } = this.props.data;

    return (
      <tr>
        <th scope="col-auto">{id}</th>
        <td scope="col-auto">{origin}</td>
        <td scope="col-auto">{destination}</td>
        <td scope="col-auto">{Filas.createDate(date)}</td>
        <td scope="col-auto">{hour}</td>
        <td scope="col-auto">{price}</td>
        <td scope="col-auto">{seats}</td>
        <td scope="col-auto">{Filas.createDate(created_at)}</td>
        <td scope="col-auto">
          <TableActionButtons eachRowId={id} />
        </td>
      </tr>
    );
  }
}

export default Filas;