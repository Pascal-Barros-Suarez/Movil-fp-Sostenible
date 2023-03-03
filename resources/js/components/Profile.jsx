import React from "react";
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Container, Card, Col, Row, } from "react-bootstrap";

export default function Profile(props) {
  const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
  //console.log(auth.user)
  let created = createDate(auth.user.created_at);
  let lastUpdated = createDate(auth.user.updated_at);


  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Card>
            <div className="card-header">{auth.user.name} Profile:</div>
            <div className="card-body">
              <Row>
                <div className="col-sm-3 col-12 ps-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75%" fill="currentColor" className="ms-2 bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg>
                </div>

                <div className="col-sm-4 col-12 ps-2">
                  {/* <p>id: {auth.user.id}</p> */}
                  <p>Name: {auth.user.name}</p>
                  <p>Password: ********</p>
                  <p>Email: {auth.user.email}</p>
                  <p>Coupon: {auth.user.coupon ? auth.user.coupon : "don't have coupons"}</p>
                </div>

                <div className="col-sm-4 col-12 ps-3 border-start">
                  {created === lastUpdated ? (
                    <p>This Profile was created at: {created}</p>
                  ) : (<>
                    <p>This Profile was created at: {created}</p>
                    <p>Last updated at: {lastUpdated}</p>
                  </>)}

                  <p>Email verified: {auth.user.email_verified_at ? 'Yes' : 'No'}</p>
                  <p>Validated: {auth.user.validated ? 'Yes' : 'No'}</p>
                  <p>Blocked: {auth.user.blocked ? 'Yes' : 'No'}</p>
                </div>
                <div className="d-flex justify-content-end mb-3 m-3 ">
                  <a type="btn" href="#" className=" me-4 btn-sm btn-primary">Change Password</a>
                  <a type="btn" href="#" className=" me-4 btn-sm btn-primary" onClick={props.change} >Edit</a>
                </div>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

function createDate(date) {
  const fecha = new Date(date);
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const createdDate = anio + '-' + mes + '-' + dia;
  return createdDate;
}

/*
blocked:null
coupon:null
created_at:"2023-03-01T18:58:35.000000Z"
email:"123456789@gmail.com"
email_verified_at:
id:1
name:"123456789"
updated_at:
validated:null
*/