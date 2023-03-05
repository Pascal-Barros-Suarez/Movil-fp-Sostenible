import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';
class Filas extends Component {
  static createDate(date) {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    return `${anio}-${mes}-${dia}`;
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <tr>
        <th scope="col-auto" >{this.props.data.id}</th>
        <td scope="col-auto" >{this.props.data.origin}</td>
        <td scope="col-auto" >{this.props.data.destination}</td>
        <td scope="col-auto" >{this.props.data.date}</td>
        <td scope="col-auto" >{this.props.data.hour}</td>
        <td scope="col-auto" >{this.props.data.price}</td>
        <td scope="col-auto" >{this.props.data.seats}</td>
        <td scope="col-auto" >{Filas.createDate(this.props.data.created_at)}</td>
        <td scope="col-auto" >
          <TableActionButtons eachRowId={this.props.data.id} />
        </td>
      </tr>
    )
  }
}
export default Filas;