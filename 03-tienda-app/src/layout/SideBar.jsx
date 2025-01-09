
import { useContext } from 'react';
import { NavLink } from 'react-router';
import { UserContext } from '../components/context/UserContext';


export const SideBar = () => {

    const { menuData } = useContext( UserContext );

  return (
    <>
        <nav className="navegacion">
            <div className="contenedor">
                <div className="contenedor1">
                    <h1 className='label'>Categorias</h1>
                    <hr />
                </div>
                
                <div className="contenedor2">
                    {
                        menuData.map( (option, key) => (
                            <NavLink
                                className={ ({isActive}) => (isActive) ? 'active' : ''} 
                                to={'/' + option.name} 
                                key={key}>
                                <button 
                                    className='btna' 
                                    // onClick={ () => setArea(option.name)}
                                >
                                { option.icon } { option.name }
                                </button>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </nav>
    </>
  )
}


