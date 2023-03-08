import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from "@inertiajs/react";
import { Container, Card, Row, Form, FormControl, Button } from "react-bootstrap";

export default function RideForm(props) {
    const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
    //console.log(auth.user);profile-edit
    const { data, setData, post, errors } = useForm({
        origin: '',
        destination: '',
        date: '',
        hour: '',
        price: '',
        seats: '',
        userid: auth.user.id,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(
            "newride",
            {
                onSuccess: () => {
                    console.log('success');
                    //Inertia.get(route('/home'));
                },
                onError: () => {
                    console.log('errores estos', errors);
                    //Inertia.get(route('/home'));
                },
            },
            data
        );
    }


    return (
        <Container>
            {/* modal para avisar */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Add Travel:</h1>
                        </div>
                        <div className="modal-body">
                            <h5>Are you sure you want to add this ride?</h5>
                            <p><b>Origin:</b>  {data.origin}</p>
                            <p><b>Destination:</b>  {data.destination}</p>
                            <p><b>Date:</b>  {data.date}</p>
                            <p><b>Hour:</b>  {data.hour}</p>
                            <p><b>Price:</b>  {data.price}</p>
                            <p><b>Seats:</b>  {data.seats}</p>
                        </div>
                        <div className="modal-footer">
                            <Button variant="btn" data-bs-dismiss="modal" aria-label="Cancel" className="me-4 btn-sm btn-danger">No</Button>
                            <Form onSubmit={handleSubmit}><Button type="submit" data-bs-dismiss="modal" className="me-4 btn-sm btn-success" aria-label="accept">Yes</Button></Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /// */}

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Card className=" mb-4">
                        <div className="card-header"><i className=" bi bi-signpost-split"> Create Ride:</i></div>
                        <div className="card-body">
                            <div className=" col-12 ps-2">
                                <Form>
                                    <Form.Group className="mt-4" controlId="formBasicOrigin">
                                        <Form.Label ><i className=" bi bi-car-front"> Origin</i></Form.Label>
                                        <FormControl type="text" name='origin' required placeholder={'Madrid'} onChange={(e) =>
                                            setData("origin", e.target.value)
                                        } /> {errors.origin && (
                                            <div className="alert alert-danger">
                                                {errors.origin}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mt-4" controlId="formBasicDestination" >
                                        <Form.Label ><i className="bi bi-sign-stop-fill"> Destination</i></Form.Label>
                                        <FormControl type="text" name='destination' required placeholder={'Sevilla'} onChange={(e) =>
                                            setData("destination", e.target.value)
                                        } /> {errors.destination && (
                                            <div className="alert alert-danger">
                                                {errors.destination}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mt-4" controlId="formBasicDate" >
                                        <Form.Label ><i className=" bi bi-calendar-date"> Date</i></Form.Label>
                                        <FormControl type="date" name='date' required onChange={(e) =>
                                            setData("date", e.target.value)
                                        } /> {errors.date && (
                                            <div className="alert alert-danger">
                                                {errors.date}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mt-4" controlId="formBasic" >
                                        <Form.Label ><i className=" bi bi-clock"> Hour</i></Form.Label>
                                        <FormControl type="time" name='hour' required onChange={(e) =>
                                            setData("hour", e.target.value)
                                        } /> {errors.hour && (
                                            <div className="alert alert-danger">
                                                {errors.hour}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mt-4" controlId="formBasic" >
                                        <Form.Label ><i className=" bi bi-cash-coin"> Price</i></Form.Label>
                                        <FormControl type="number" name='price' required placeholder={'23$'} onChange={(e) =>
                                            setData("price", e.target.value)
                                        } /> {errors.price && (
                                            <div className="alert alert-danger">
                                                {errors.price}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mt-4" controlId="formBasic" >
                                        <Form.Label >🪑<i> Seats</i> </Form.Label>
                                        <FormControl type="number" name='seats' required placeholder={'introduce the max of passegers'} onChange={(e) =>
                                            setData("seats", e.target.value)
                                        } /> {errors.seats && (
                                            <div className="alert alert-danger">
                                                {errors.seats}
                                            </div>
                                        )}
                                    </Form.Group>

                                    <div className="d-flex justify-content-end mb-3 m-3 ">
                                        <Button data-bs-toggle="modal" data-bs-target="#exampleModal" className="me-4 btn-sm" variant="success">
                                            Create Ride
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>);
}