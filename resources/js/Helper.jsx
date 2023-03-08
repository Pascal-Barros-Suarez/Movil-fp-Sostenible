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
        className="d-inline-block m-1 rounded-5"
        bg='success'
        key='alert_flash'
        onClose={() => setShow(false)} show={show} delay={4050} autohide>
        <div className="d-flex justify-content-between">
          <Toast.Body>
            <h5 className="fa fa-flash text-white">{flash.success}</h5>
          </Toast.Body>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>
      </Toast> : ''
    flash.success = null;
  } else if (flash.error) {

    message = flash.error ?
      <Toast
        className="d-inline-block m-1"
        bg='danger'
        key='alert_flash'
        onClose={() => setShow(false)} show={show} delay={3500} autohide>
        <Toast.Body>
          <strong className="fa fa-flash text-white">{flash.error}</strong>
        </Toast.Body>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </Toast> : ''
    flash.error = null;
  }
  return message;
}
