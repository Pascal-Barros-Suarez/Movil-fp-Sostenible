import { Form, Button } from 'react-bootstrap';

export default function Buscador() {

    
    return (
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <Form>
                        <Form.Group controlId="origen">
                            <Form.Label> <strong>Origen</strong></Form.Label>
                            <Form.Control type="text" placeholder="Introduce un origen" />
                        </Form.Group>

                        <Form.Group controlId="destino">
                            <Form.Label><strong>Destino</strong></Form.Label>
                            <Form.Control type="text" placeholder="Introduce un destino" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Buscar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}



