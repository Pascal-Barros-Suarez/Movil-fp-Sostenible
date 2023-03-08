import React, { useState } from 'react';
import ViewModal from './Modals/ViewModal';
import axios from 'axios';

function TableActionButtons(props) {
  const [viajeDetails, setViajeDetails] = useState({ currentOrigin: null, currentDestination: null });

  const getViajesDetails = (id) => {
    axios.post('/get/individual/viaje/details', { viajeId: id }).then((response) => {
      setViajeDetails({
        currentOrigin: response.data.origin,
        currentDestination: response.data.destination
      });
      console.log(response.data);
    });
  };

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        data-bs-toggle="modal"
        data-bsd-target="#exampleModal"
        onClick={() => { getViajesDetails(props.eachRowId); }}
      >
        <i id='view' className="bi bi-eye" />
      </button>
      <ViewModal modalId={props.eachRowId} viajeData={viajeDetails} />
      <button id='edit' type="button" className="btn btn-outline-info btn-sm"><i id='edit' className="bi bi-tools" /></button>
      <button id='delete' type="button" className="btn btn-outline-danger btn-sm"><i id='delete' className="bi bi-trash3-fill" /></button>
    </div>
  );
}

export default TableActionButtons;