import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BtnAgregar } from './BtnAgregar';


export const Payment = () => {
    const [show, setShow] = useState(false);
    const [fecha, setFecha] = useState(new Date().toLocaleDateString());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setFecha(new Date().toLocaleDateString());
    }, [])
    
    
    return (
        <>
           <button 
                className='btn'
                onClick={handleShow}
            >
                Payment
           </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ul style={{listStyle: 'none'}}>
                <h6> Restaurant </h6>
                <hr/>
                <li>Cliente:   Juan Perez</li>
                <li>Fecha:     { fecha }</li>
                <li>RTN:       0501-1989-5420005</li>
                <hr/>

           

            </ul>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>
        </>
      );
}
