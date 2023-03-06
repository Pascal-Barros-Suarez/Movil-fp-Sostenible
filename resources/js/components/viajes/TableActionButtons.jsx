import React, { Component } from 'react';
import axios from 'axios';

class TableActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOrigin: null,
            currentDestination: null,
        }
    }

    getViajesDetails = (id, setShowModal) => {
        axios.post('/get/individual/viaje/details', {
            viajeId: id
        }).then((response) => {
            this.setState({
                currentOrigin: response.data.origin,
                currentDestination: response.data.destination
            })
            console.log(response.data);
        })
    }

    render() {
        return (
            <div className="btn-group" role="group" >
                <button type="button"
                    className="btn btn-outline-primary btn-sm"
                >
                    Solicitar
                </button>
            </div>
        )
    }
}

export default TableActionButtons;