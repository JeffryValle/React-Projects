
import { useState } from 'react';
import '../css/navbar.css'

export const NavBar = () => {

  
  return (
    <>
      {/* <button className='.btnn'><span className="text">Hover me</span><span>Thanks!</span></button> */}
      <div className='contenedor active'>
              <a href="#inicio">Jeffry Valle</a>
              <a href="#inicio">Inicio</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#tecnologías">Tecnologías</a>
              <a href="#contacto">Contacto</a>
      </div>

    </>
  );
}
