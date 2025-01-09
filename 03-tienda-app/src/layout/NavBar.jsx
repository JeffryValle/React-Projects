import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../components/context/UserContext';
import Swal from 'sweetalert2';


export const NavBar = () => {

  const {carrito, setCarrito, total} = useContext( UserContext );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteArticulo = (element) => {
    
    // Filtra los elementos que no contienen la condicion especificada
    const item = carrito.filter( item => item.id !== element.id)
    // // Actualizamos el carrito
    setCarrito(item);

    // Ventana emergente, confirma la eliminación del elemento
    Swal.fire({
      title: "Eliminado Correctamente",
      icon: "success"
    });

  };


  return (
    <>
      <div className='icons'>
        
        <button className='icon' onClick={ ()=>{}}>
        <GitHubIcon style={{
          fontSize: '3rem', 
          filter: 'invert(100%)'
        }}/>
        </button>

        <button className='icon'>
        <FacebookIcon style={{
          fontSize: '3rem', 
          filter: 'invert(100%)'
        }}/>
        </button>

        <button className='icon'>
        <InstagramIcon style={{
          fontSize: '3rem', 
          filter: 'invert(100%)'
        }}/>
        </button>


      </div>
 
        <button className='carrito' onClick={handleShow}>
          <ShoppingCartIcon style={{ fontSize: '3rem', filter: 'invert(100%)'}}/>
        </button>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: '3rem'}}>Compras</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          
          <div className='titles'>
            <h4>Cantidad</h4>
            <h4>Descripcion</h4>
            <h4>Total</h4>
            <h4></h4>
          </div>
          <hr />

          <div className='lista'>
            <ul>
              {
                carrito.map((element) => (
                    <div className='productos' key={element.id}>
                      <li className='a1 todos'>{element.amount}</li>
                      <li className='a2 todos'>{element.name}</li>
                      <li className='a3 todos'>{element.total}</li>
                      <button className='btn btn-danger a4'
                        onClick={ () => deleteArticulo(element)}
                      >Eliminar</button>
                    </div>
                ))
              }
            </ul>
          </div>
            {
              ( total !== 0 ) 
                ? <h4 className='act'>Total a Pagar:<span className='prize'> L { total }</span> </h4> 
                : <h4 className='act'>No ha agredado nada al carrito</h4>
            }

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>


    </>
  )
}
 
