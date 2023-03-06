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

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <th>{this.props.data.id}</th>
        <td>{this.props.data.origin}</td>
        <td>{this.props.data.destination}</td>
        <td>{Filas.createDate(this.props.data.date)}</td>
        <td>{this.props.data.hour}</td>
        <td>{this.props.data.price}</td>
        <td>{this.props.data.seats}</td>
        <td>{Filas.createDate(this.props.data.created_at)}</td>
        <td>
          <TableActionButtons eachRowId={this.props.data.id} />
        </td>
      </tr>
    )
  }

}
export default Filas;