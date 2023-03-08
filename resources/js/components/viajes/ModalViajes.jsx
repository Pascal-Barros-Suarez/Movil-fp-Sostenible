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
      {props.data.idusers != auth.user.id &&
        <Button variant="primary" onClick={handleShow}>
          Solicitar
        </Button>
      }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Desea registrarse en este trayecto?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Origen:</strong> {props.data.origin}<br />
          <strong>Destino:</strong> {props.data.destination}<br />
          <strong>Fecha:</strong> {props.data.date}<br />
          <strong>Hora:</strong> {props.data.hour}<br />
          <strong>Precio:</strong> {props.data.price}<br />
          <strong>Asientos:</strong> {props.data.seats}<br />
          Recuerde que una vez que acepte, ya no podrá cancelar el viaje.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmar}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViajes;