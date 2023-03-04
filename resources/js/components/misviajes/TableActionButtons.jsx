import React, { Component } from 'react';

class TableActionButtons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="btn-group" role="group" >
                <button type="button" class="btn btn-outline-primary btn-sm">Ver</button>
                <button type="button" class="btn btn-outline-info btn-sm">Editar</button>
                <button type="button" class="btn btn-outline-danger btn-sm">Eliminar</button>
            </div>
        )
    }

}
export default TableActionButtons;