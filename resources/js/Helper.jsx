import { usePage } from "@inertiajs/react";
import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';

export function dibujaFlash() {
  const { flash } = usePage().props;
  const [show, setShow] = useState(true);
  let message;

  if (flash.success) {
    message = flash.success ?
      <Toast
        className="d-inline-block m-1"
        bg='success'
        key='alert_flash'
        onClose={() => setShow(false)} show={show} delay={3500} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Alert Successfully</strong>
        </Toast.Header>
        <Toast.Body>
          <h3 className="fa fa-flash">{flash.success}</h3>
        </Toast.Body>
      </Toast> : ''
    flash.success = null;
  } else if (flash.error) {

    message = flash.error ?
      <Toast
        className="d-inline-block m-1"
        bg='danger'
        key='alert_flash'
        onClose={() => setShow(false)} show={show} delay={3500} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Alert Error</strong>
        </Toast.Header>
        <Toast.Body>
          <h3 className="fa fa-flash">{flash.error}</h3>
        </Toast.Body>
      </Toast> : ''
    flash.error = null;
  }
  return message;
}
