import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useForm, usePage } from "@inertiajs/react";

function ModalViajes(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { auth } = usePage().props;

  const { data, post, errors } = useForm({
    idtravels: props.data.id
  });

  ///////////// IF CONFIRM /////////////
  const handleConfirmar = (e) => {
    // Insert record in bookingsTable with idtravel and iduser here
    e.preventDefault();
    post(
      "/bookings",
      {
        onSuccess: () => {
          console.log('reserva');
        },
        onError: () => { console.log('errores estos', errors); },
      },
      data
    );
  };

  console.log(auth);

  return (
    <>
      {auth.user ? ( // conditional to check if user is authenticated
        props.data.idusers != auth.user.id && (
          <Button variant="primary" onClick={handleShow}>
            Order
          </Button>
        )
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Order
        </Button>
      )}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Would you like to register for this trip?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Origin:</strong> {props.data.origin}
          <br />
          <strong>Destination:</strong> {props.data.destination}
          <br />
          <strong>Date:</strong> {props.data.date}
          <br />
          <strong>Hour:</strong> {props.data.hour}
          <br />
          <strong>Price:</strong> {props.data.price}
          <br />
          <strong>Seats:</strong> {props.data.seats}
          <br />
          Remember that once you accept, you will not be able to cancel the trip.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmar}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViajes;





