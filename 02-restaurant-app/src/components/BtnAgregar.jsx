import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Payment } from './Payment';


export const BtnAgregar = ({
    opcion, add, add2,
    amount, todo, tot,
    product1,
    product2,
    product3,
    product4,    
}) => {
  const [show, setShow] = useState(false);
  
  const [ pro1, setPro1] = useState([]);
  const [ pro2, setPro2] = useState([]);
  const [ pro3, setPro3] = useState([]);
  const [ pro4, setPro4] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (opcion, product1, product2, product3, product4) => {

    if( product1 !== 0|| product2 !== 0 || product3 !== 0 || product4 !== 0  ){
      add(opcion);
      add2(opcion,product1, product2, product3, product4);
      setShow(true);
    }
  }


  return (
    <>
      
      <button 
        className='btn btn1'
        onClick={()=>handleShow(opcion, product1, product2, product3, product4)}
      >Add</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><small style={{ color: 'green'}}>{ opcion.name + ' '}</small>
          
           <small>Agregado Correctamente</small></Modal.Title>

        </Modal.Header>
        <Modal.Body>Su pedido está en proceso en cocina</Modal.Body>

        <div className="cont">
          <div className="cuadrado1">
              {/* Muestra las cantidades */}
          { amount.map( (value) => (<div key={value}>{value}</div>)) } 
          </div>
          {/* Muestra los nombres de los articulos */}
          <div className="cuadrado1">
          { todo.map( (op1) => (<div key={op1}>{op1.name}</div>)) } 
          </div>
          {/* Muestra los totales de la cantidad * precio de los articulos */}
          <div className="cuadrado1">
          { tot.map( (value) => (<div className="noborder cuadrado2" key={value}>{value}</div>)) } 
          </div>
        </div>  
       
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>

      </Modal>

    </>
  );
}