import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class Filas extends Component {
  render() {
    const { bookings, pagesVisited, itemsPerPage } = this.props;
    const displayViajes = bookings
      .slice(pagesVisited, pagesVisited + itemsPerPage)
      .map(function (booking, index) {
        return (
          <tr key={index}>
            <td>{booking.id}</td>
            <td>{booking.travelData.origin}</td>
            <td>{booking.travelData.destination}</td>
            <td>{booking.travelData.date}</td>
            <td>{booking.travelData.hour}</td>
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