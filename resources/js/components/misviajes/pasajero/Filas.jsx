import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class Filas extends Component {
  render() {
    const { bookings, pagesVisited, itemsPerPage } = this.props;
    const displayViajes = bookings
  .slice(pagesVisited, pagesVisited + itemsPerPage)
  .map(function (booking, index) {
    const { origin, destination, date, hour } = booking.travelData;
    return (
      <tr key={index}>
        <td>{booking.id}</td>
        <td>{origin}</td>
        <td>{destination}</td>
        <td>{date}</td>
        <td>{hour}</td>
        <td>{booking.price}</td>
        <td>{booking.seats}</td>
        <td>{booking.created_at}</td>
        <td>
          <a href={'/bookings/' + booking.id}>Ver</a>
        </td>
      </tr>
    );
  });
    return <>{displayViajes}</>;
  }
}

export default Filas;