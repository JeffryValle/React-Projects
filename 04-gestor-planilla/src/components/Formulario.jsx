import { useContext } from "react"
import { SelectGender } from "../utilities/SelectGender"
import { Contexto } from "../context/Provider"

export const Formulario = () => {

    const { handleClose } = useContext(Contexto);
    
  return (
    <form>
        <div className="form-control">
            <h3 className="form-title">Nombre</h3>
            <input className="form-input"
                placeholder="Pablo"
            />
        </div>
        <div className="form-control">
            <h3 className="form-title">Apellido</h3>
            <input className="form-input" 
                placeholder="Perez"
            />
        </div>
        <div className="form-control">
            <h3 className="form-title">Identidad</h3>
            <input className="form-input" 
                placeholder="0501-1998-09283"
            />
        </div>
        <div className="form-control">
            <h3 className="form-title">Cargo</h3>
            <input className="form-input" 
                placeholder="Gerente de ventas"
            />
        </div>
        <div className="form-control">
            <h3 className="form-title">Genero</h3>
            <SelectGender />
        </div>
        <div className="form-control">
            <h3 className="form-title">Edad</h3>
            <input 
                className="form-input" 
                type="number"
                placeholder="35"
                min='0' max='120'
            />
        </div>
        <div className="contenedor-formulario">
            <button 
                className="eliminar crear"
                onClick={ handleClose }
                
            >Cerrar</button>
            <button className="crear2 crear">Crear</button>
        </div>
    </form>
  )
}
