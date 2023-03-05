
import React, { Component } from 'react';
class ViewModal extends Component {
constructor(props){
    super(props);
}
render(){
    return(
      // TypeError: Cannot read properties of undefined (reading 'classList'
      // id={'viewModal'+this.props.modalId}
      //THIS.PROPS.MODALID NO ME ESTÁ LINKEANDO CON TABLEACTIONBUTTONS
      <div class="modal fade" id={'viewModal'+this.props.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Origen:  <strong>{this.props.viajeData.origin}</strong>
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    )
}

}
export default ViewModal;