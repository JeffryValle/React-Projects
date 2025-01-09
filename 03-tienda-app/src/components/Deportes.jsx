import image from '../data/images/image.png';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Swal from 'sweetalert2';

export const Deportes = () => {

  const { 
    deportesData,
    carrito, setCarrito,
    counter, setCounter } = useContext( UserContext );
  
  const { counter1, counter2, counter3,
    counter4, counter5, counter6, } = counter;

    const addButton = (value, contador) => {

      // Si no ha agregado cantidad, no agrega nada al carrito
      if (contador === 0) return;

      const newItem = {
        id: carrito.length + 1,
        name: value.name,
        amount: contador,
        total: contador * value.price,
      }
      
      setCarrito([...carrito, newItem]);

      // Ventana modal que muestra cuando el producto es agregado
      Swal.fire({
        title: "Agregado Correctamente",
        icon: "success"
      });
      

    }

  const addValue = (value) => {
    
    if (value === 'counter1') { setCounter(prevState => ({ 
      ...prevState, ['counter1']: prevState['counter1'] + 1,}));
    }
    if (value === 'counter2') { setCounter(prevState => ({ 
      ...prevState, ['counter2']: prevState['counter2'] + 1,}));
    }
    if (value === 'counter3') { setCounter(prevState => ({ 
      ...prevState, ['counter3']: prevState['counter3'] + 1,}));
    }
    if (value === 'counter4') { setCounter(prevState => ({ 
      ...prevState, ['counter4']: prevState['counter4'] + 1,}));
    }
    if (value === 'counter5') { setCounter(prevState => ({ 
      ...prevState, ['counter5']: prevState['counter5'] + 1,}));
    }
    if (value === 'counter6') { setCounter(prevState => ({ 
      ...prevState, ['counter6']: prevState['counter6'] + 1,}));
    }
  };

  const deleteValue = (value) => {
    
    if (value === 'counter1' && counter1 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter1']: prevState['counter1'] - 1,}));
    }
    if (value === 'counter2' && counter2 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter2']: prevState['counter2'] - 1,}));
    }
    if (value === 'counter3' && counter3 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter3']: prevState['counter3'] - 1,}));
    }
    if (value === 'counter4' && counter4 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter4']: prevState['counter4'] - 1,}));
    }
    if (value === 'counter5' && counter5 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter5']: prevState['counter5'] - 1,}));
    }
    if (value === 'counter6' && counter6 !== 0) { setCounter(prevState => ({ 
      ...prevState, ['counter6']: prevState['counter6'] - 1,}));
    }
  };

  return (
        <div className="grupo">
          {
            deportesData.map((value) => (
              <div className='carta' key={value.id} >
                <div className="card">
                  <div className="card-body tarjeta">
                    <img src={image} />
                    <h5 className="title">{ value.name }</h5>
                    <h5 className="prize">${value.price}</h5>
                    <div className='botones'>
                      <button className='btn btn-outline-primary b1'
                        onClick={ () => addValue(`counter${value.id}`) }
                      > + </button>
                      <h5 className='b1'> { counter[`counter${value.id}`] }</h5>
                      <button className='btn btn-outline-primary b1'
                        onClick={ () => deleteValue(`counter${value.id}`) }
                      > - </button>
                      <button className='btn btn-outline-primary b2'
                        onClick={ () => addButton( value, counter[`counter${value.id}`]  )}
                      >Add</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
  )
}