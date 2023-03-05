
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
      <div classname="modal fade" id={'viewModal'+this.props.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div classname="modal-dialog" role="document">
        <div classname="modal-content">
          <div classname="modal-header">
            <h5 classname="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" classname="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div classname="modal-body">
            Origen:  <strong>{this.props.viajeData.origin}</strong>
            ...
          </div>
          <div classname="modal-footer">
            <button type="button" classname="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" classname="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    )
}

}
export default ViewModal;