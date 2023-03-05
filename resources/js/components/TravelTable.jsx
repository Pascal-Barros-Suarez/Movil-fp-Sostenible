import React from 'react';
import axios from 'axios';

class TravelTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { travels: [] };
    }

    componentDidMount() {
        axios.get('/get/viajes/list').then((response) => {
            this.setState({ travels: response.data });
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Precio</th>
                        <th>Asientos</th>
                        <th>Creación</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.travels.map((travel) => (
                        <tr key={travel.id}>
                            <td>{travel.origin}</td>
                            <td>{travel.destination}</td>
                            <td>{travel.date}</td>
                            <td>{travel.hour}</td>
                            <td>{travel.price}</td>
                            <td>{travel.seats}</td>
                            <td>{travel.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TravelTable;