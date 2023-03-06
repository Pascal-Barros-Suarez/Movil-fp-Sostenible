import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "@inertiajs/react";

export default function Buscador() {
    const { data, setData, post, errors } = useForm({
        origin: '',
        destination: '',
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
    //SearchForm
    return (

        <div className="mt-2 container-fluid">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group controlId="origen" className="col-sm-5 col-6 ps-2 mt-1">
                        <Form.Label hidden> <strong>Origin</strong></Form.Label>
                        <Form.Control type="text" name='origin' placeholder="Origen" onChange={(e) =>
                            setData("origin", e.target.value)
                        } /> {errors.password && (
                            <div className="alert alert-danger">
                                {errors.origin}
                            </div>
                        )}
                    </Form.Group>
                    <Form.Group controlId="destino" className="col-sm-5 col-6 ps-2 mt-1">
                        <Form.Label hidden><strong>Destination</strong></Form.Label>
                        <Form.Control type="text" name='destination' placeholder="Destino" onChange={(e) =>
                            setData("destination", e.target.value)
                        } /> {errors.password && (
                            <div className="alert alert-danger">
                                {errors.destination}
                            </div>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit" className="col-sm-2 col-12 ps-2 mt-1">
                        Buscar
                    </Button>
                </Row>
            </Form>
        </div>
    );
}



