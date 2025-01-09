import { UserContext } from "./UserContext"
import AddHomeIcon from '@mui/icons-material/AddHome';
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FlatwareIcon from '@mui/icons-material/Flatware';
import { electronicosData, hogarData, deportesData, utensiliosData, ropaData } from "../../data";
import { useState } from "react";

export const UserProvider = ({ children }) => { 

   const [electronics, setElectronics] = useState(electronicosData);
   
   const [carrito, setCarrito] = useState([])
   
   
   const [counter, setCounter] = useState({
      counter1: 0, counter2: 0, counter3: 0,
      counter4: 0, counter5: 0, counter6: 0,
   })

   // Guarda la suma total de los totales en el arreglo carrito
   const total = carrito.reduce((acumulador, item) => acumulador + item.total, 0);


  return (
    
    <UserContext.Provider value={ {menuData: menuData, electronics: electronics,
      carrito: carrito, setCarrito: setCarrito, counter: counter, setCounter: setCounter, total,
      hogarData, deportesData, utensiliosData, ropaData,
    } } >
        { children } 
    </UserContext.Provider>

  )
}


export const menuData = [
    {
       name: 'Hogar',
       icon: <AddHomeIcon style={{ fontSize: '2.2rem', paddingRight:'0.5rem' }}/>,
    },
    {
       name: 'Electronicos',
       icon: <ComputerIcon style={{ fontSize: '2.2rem', paddingRight:'0.5rem' }} />,
    },
    {
       name: 'Ropa',
       icon: <CheckroomIcon style={{ fontSize: '2.2rem', paddingRight:'0.5rem' }} />,
    },
    {
       name: 'Deportes',
       icon: <SportsBasketballIcon style={{ fontSize: '2.2rem', paddingRight:'0.5rem' }} />,
    },
    {
       name: 'Utensilios',
       icon: <FlatwareIcon style={{ fontSize: '2.2rem', paddingRight:'0.5rem' }} />,
    },
]