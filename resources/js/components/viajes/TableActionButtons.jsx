import React, { Component } from 'react';
import axios from 'axios';
import ModalViajes from './ModalViajes';

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
                <ModalViajes data={this.props.data} />
            </div>
        )
    }
}

export default TableActionButtons;