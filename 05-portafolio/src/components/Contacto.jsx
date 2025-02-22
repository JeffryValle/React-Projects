import '../css/contacto.css';
import { useState } from 'react'

export const Contacto = () => {

    const [data, setData] = useState("");

  return (
    <>
    <div className="contacto-title">
        <h1>Contáctame</h1>
    </div>

    <form className='contacto-formulario'>
      <input placeholder="Nombre" />
      <input placeholder="Correo" />
      <textarea placeholder="Mensaje" />
      
      <input type="submit" className='btn-enviar' value='Enviar'/>
    </form>

    </> 
  )
}
