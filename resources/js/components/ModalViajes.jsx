import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalViajes() {
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
          Recuerde que una vez que acepte, ya no podrás cancelar el viaje.
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