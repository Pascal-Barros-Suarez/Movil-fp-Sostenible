import React from "react";
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Container, Card, Col, Row, } from "react-bootstrap";

export default function EditProfile(props) {
    const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
    //console.log(auth.user);

    return (
        <Container> {/* ruta para el formulario profile-edit */}
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Card>
                        <div className="card-header">Editing {auth.user.name} Profile:</div>
                        <div className="card-body">
                            <Row>
                                <div className="col-sm-3 col-12 ps-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" fill="currentColor" class="bi bi-person-fill-gear" viewBox="0 0 16 16">
                                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                    </svg>
                                </div>

                                <div className="col-sm-6 col-12 ps-2">
                                    <p>id: {auth.user.id}</p>
                                    <p>Name: {auth.user.name}</p>
                                    <p>Email: {auth.user.email}</p>
                                    <p>Years: {auth.user.years ? auth.user.years : "Not specified"}</p>
                                    <p>Smoker: {auth.user.smoker ? auth.user.smoker : "Not specified"}</p>
                                </div>
                                <div className="d-flex justify-content-end mb-3 m-3 ">
                                    <button type href="#" className=" me-4 btn-sm btn-primary" onClick={props.change}>Edit</button>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>);
}

function createDate(date) {
    const fecha = new Date(date);
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    const createdDate = anio + '-' + mes + '-' + dia;
    return createdDate;
}
