import React from "react";
import { dibujaFlash } from '../../Helper';
import { useForm, usePage } from '@inertiajs/react';
import { Form, Container, Card, Col, Row, Button } from "react-bootstrap";

export default function Profile(props) {
  const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo
  let created = createDate(auth.user.created_at);
  let lastUpdated = createDate(auth.user.updated_at);

  const { data, post, errors } = useForm({
    id: auth.user.id,
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(
      "/profile-delete",
      {
        onSuccess: () => {
          console.log("user" + auth.user.name + " deleted successfully");
        },
        onError: () => { console.log('deleted failure', errors); },
      }//,data
    );
  }

  return (
    <div className="container-fluid logoBackground">
      {dibujaFlash()}
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
              <h1>Delete User {auth.user.name}:</h1>
            </div>
            <div className="modal-body">
              <h5>Are you sure you want to delete the user?</h5>
            </div>
            <div className="modal-footer">
              <Button type="btn" data-bs-dismiss="modal" aria-label="Cancel" className="me-4 btn-sm btn-danger">No</Button>
              <Form onSubmit={handleSubmit}><Button type="submit" data-bs-dismiss="modal" className="me-4 btn-sm btn-primary" aria-label="accept">Yes</Button></Form>

            </div>
          </div>
        </div>
      </div>
      {/* /// */}
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Card className=" mb-4">
              <div className="card-header"><i className="bi bi-tools"> {auth.user.name} Profile</i>:</div>
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
                    <p>Age: {auth.user.age ? auth.user.age : "Not specified"}</p>
                    <p>Smoker: {auth.user.smoker ? auth.user.smoker : "Not specified"}</p>
                    <p>Coupon: {auth.user.coupon ? auth.user.coupon : "don't have coupons"}</p>
                  </div>
                  {screen.width < 565 && <><hr />
                    <div className="col-sm-4 col-12 ps-3">
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
                  </>
                  }


                  {screen.width > 565 &&
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
                  }

                  <div className="d-flex justify-content-end mb-3 m-3 ">
                    <Button type="btn" aria-label="Delete" data-bs-toggle="modal" data-bs-target="#exampleModal" className=" text-decoration-underline me-4 btn-sm btn-danger">Delete</Button>
                    <Button type="btn" aria-label="Change Password" className=" text-decoration-underline me-4 btn-sm btn-primary" onClick={props.changePassword} >Change Password</Button>
                    <Button type="btn" aria-label="Edit" className=" text-decoration-underline me-4 btn-sm btn-primary" onClick={props.change} >Edit</Button>
                  </div>
                </Row>
              </div>
            </Card>
          </div>
        </div>
      </Container></div>
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