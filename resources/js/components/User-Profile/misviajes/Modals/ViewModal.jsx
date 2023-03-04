
import React, { Component } from 'react';
class ViewModal extends Component {
constructor(props){
    super(props);
}
render(){
    return(
        <div class="modal fade" id={"viewModal"+this.props.modalId } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Origen: <strong>{this.props.viajeData.currentOrigin}</strong>
        <hr />
        Destino: <strong>{this.props.viajeData.currentDestination}</strong>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    )
}

}
export default ViewModal;