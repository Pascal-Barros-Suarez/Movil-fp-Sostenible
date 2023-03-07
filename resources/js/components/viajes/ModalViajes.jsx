import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalViajes(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Solicitar
      </Button>

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
          <strong>Origen:</strong> {props.data.origen}<br />
          <strong>Destino:</strong> {props.data.destino}<br />
          <strong>Fecha:</strong> {props.data.fecha}<br />
          <strong>Hora:</strong> {props.data.hora}<br />
          Recuerde que una vez que acepte, ya no podrá cancelar el viaje.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViajes;