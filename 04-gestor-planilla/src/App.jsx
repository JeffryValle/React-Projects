
import './styles/App.css'
import { Empleados } from './components/Empleados';
import { Contexto } from './context/Provider';
import { listaEmpleados } from './data/listaEmpleados';
import { useState } from 'react';


export const App = () => {
  
  const [isSelected, setIsSelected] = useState(false)
  const [user, setUser] = useState([])

  /*Ventana : Crear */
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  /* Seleccion de Genero */
  const [gender, setGender] = useState('');
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  
  return (

    <Contexto.Provider value={ {
        listaEmpleados , 
        isSelected, setIsSelected,
        user, setUser, 
        open, setOpen, handleClose, handleOpen,
        gender, setGender, handleChangeGender,
      } }>
      <Empleados />
    </Contexto.Provider>
  )
}

