import React from "react";
import { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from "@inertiajs/react";
import { Container, Card, Row, Form, FormControl, Button } from "react-bootstrap";

export default function EditPassword(props) {
    const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
    const { data, setData, post, errors } = useForm({
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(
            "profile-edit-password",
            {
                onSuccess: () => {
                    // console.log("Success");
                },
                onError: () => { console.log('errores estos', errors); },
            },
            data
        );
    }


    return (
        <div className="container-fluid logoBackground">

            <Container>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Card className=" mb-4">
                            <div className="card-header"><i className="bi bi-tools"> Editing {auth.user.name} Password:</i></div>
                            <div className="card-body">
                                <Row>
                                    <div className="col-sm-3 col-12 ps-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90%" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16">
                                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                        </svg>
                                    </div>

                                    <div className="col-sm-8 col-12 ps-2">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formBasicUsername" hidden>
                                                <Form.Label>Username</Form.Label>
                                                <FormControl type="text" name='username' autoComplete="username"
                                                    placeholder={auth.user.name} value={auth.user.name} readOnly />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail" hidden>
                                                <Form.Label>Email address</Form.Label>
                                                <FormControl type="email" name='email' autoComplete="email"
                                                    placeholder={auth.user.email} value={auth.user.email} readOnly />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password:</Form.Label>
                                                <FormControl type="password" name='password' autoComplete="new-password"
                                                    placeholder={'insert the Password'} onChange={(e) =>
                                                        setData("password", e.target.value)
                                                    } /> {errors.password && (
                                                        <div className="alert alert-danger">
                                                            {errors.password}
                                                        </div>
                                                    )}
                                            </Form.Group>

                                            <Form.Group className='mt-3' controlId="formBasicPasswordConfirm">
                                                <Form.Label>Confirm Password:</Form.Label>
                                                <FormControl type="password" name='Password Confirm' autoComplete="new-password"
                                                    placeholder={'Confirm the Password'} onChange={(e) =>
                                                        setData("password_confirmation", e.target.value)
                                                    } />{errors.password_confirmation && (
                                                        <div className="alert alert-danger">
                                                            {errors.password_confirmation}
                                                        </div>
                                                    )}
                                            </Form.Group>

                                            <div className="d-flex justify-content-end mb-3 m-3 ">
                                                <button className="me-4 btn-secondary btn-sm" variant="success" onClick={props.changePassword}>
                                                    Cancel
                                                </button>
                                                <Button className="me-4 btn-sm" variant="success" type="submit">
                                                    Reset Password
                                                </Button>
                                            </div>

                                        </Form>
                                    </div>

                                </Row>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}
