import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "@inertiajs/react";

export default function Buscador() {
    const { data, setData, post, errors } = useForm({
        origin: '',
        destination: '',
        date: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(
            "search",
            {
                onSuccess: () => {
                    console.log('success search')
                },
                onError: () => { console.log('errores estos', errors); },
            },
            data
        );
    }

    return (

        <div className="mt-2 container-fluid">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group controlId="origen" className="col-sm-3 col-6 ps-2 mt-1">
                        <Form.Label hidden> <strong>Origin</strong></Form.Label>
                        <Form.Control type="text" name='origin' placeholder="Origen" onChange={(e) =>
                            setData("origin", e.target.value)
                        } /> {errors.origin && (
                            <div className="alert alert-danger">
                                {errors.origin}
                            </div>
                        )}
                    </Form.Group>

                    <Form.Group controlId="destino" className="col-sm-3 col-6 ps-2 mt-1">
                        <Form.Label hidden><strong>Destination</strong></Form.Label>
                        <Form.Control type="text" name='destination' placeholder="Destiny" onChange={(e) =>
                            setData("destination", e.target.value)
                        } /> {errors.destination && (
                            <div className="alert alert-danger">
                                {errors.destination}
                            </div>
                        )}
                    </Form.Group>

                    <Form.Group controlId="date" className="col-sm-3 col-6 ps-2 mt-1">
                        <Form.Label hidden><strong>Date</strong></Form.Label>
                        <Form.Control type="date" name='date' placeholder="date" onChange={(e) =>
                            setData("date", e.target.value)
                        } /> {errors.date && (
                            <div className="alert alert-danger">
                                {errors.date}
                            </div>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="col-sm-3 col-6 ps-2 mt-1">
                        Buscar
                    </Button>
                </Row>
            </Form>
        </div>
    );
}



