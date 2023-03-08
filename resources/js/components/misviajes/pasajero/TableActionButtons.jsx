import React, { Component } from 'react';
import ViewModal from '../conductor/Modals/ViewModal';
import axios from 'axios';
class TableActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOrigin: null,
            currentDestination: null,
        }
    }

    //informacion individual viajes
    getViajesDetails = (id) => {
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
                    data-bs-toggle="modal"
                    data-bsd-target="#exampleModal"
                    onClick={() => { this.getViajesDetails(this.props.eachRowId) }}
                >
                    <i id='view' className="bi bi-eye" />
                </button>
                <ViewModal modalId={this.props.eachRowId} viajeData={this.state} />
                <button id='edit' type="button" className="btn btn-outline-info btn-sm"><i id='edit' className="bi bi-tools" /></button>
                <button id='delete' type="button" className="btn btn-outline-danger btn-sm"><i id='delete' className="bi bi-trash3-fill" /></button>
            </div>
        )
    }

}
export default TableActionButtons;
