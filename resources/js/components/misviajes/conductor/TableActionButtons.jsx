import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "@inertiajs/react";

import ViewModal from './Modals/ViewModal';
import axios from 'axios';

function TableActionButtons(props) {
    const [viajeDetails, setViajeDetails] = useState({ currentOrigin: null, currentDestination: null });

    const { data, setData, post, errors } = useForm({
        id: '',
    });

    console.log(data);

    function handleSubmit(e) {
        e.preventDefault();
        post(
            "/travels-delete",
            {
                onSuccess: () => {
                    console.log("successfully");
                },
                onError: () => { console.log('deleted failure', errors); },
            }, data
        );
    }


    const getViajesDetails = (id) => {
        axios.post('/get/individual/viaje/details', { viajeId: id }).then((response) => {
            setViajeDetails({
                currentOrigin: response.data.origin,
                currentDestination: response.data.destination
            });
            console.log(response.data);
        });
    };

    return (    
        <div className="btn-group" role="group">
            <Button id='view'
                type="button"
                className=" btn-light btn btn-outline-primary btn-sm"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => { getViajesDetails(props.eachRowId); }}
            >
                <i className="bi bi-eye" />
            </Button>
            <ViewModal modalId={props.eachRowId} viajeData={viajeDetails} />
            <Button id='edit' type="button" className=" btn-light btn btn-outline-info btn-sm"><i id='edit' className="bi bi-tools" /></Button>
            <Form onSubmit={handleSubmit}><Button id='delete' type="submit" className=" btn-light btn btn-outline-danger rounded-end btn-sm" onClick={() => { setData("id", props.eachRowId); }}><i id='delete' className="bi bi-trash3-fill" /></Button></Form>
        </div>
    );
}

export default TableActionButtons;