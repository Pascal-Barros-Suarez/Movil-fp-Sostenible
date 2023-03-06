
import React, { Component } from 'react';
class ViewModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // TypeError: Cannot read properties of undefined (reading 'classNameList'
      // id={'viewModal'+this.props.modalId}
      //THIS.PROPS.MODALID NO ME ESTÁ LINKEANDO CON TABLEACTIONBUTTONS
      <div className="modal fade" id={'viewModal' + this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Origen:  <strong>{this.props.viajeData.origin}</strong>
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default ViewModal;