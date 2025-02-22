import { Inicio, NavBar, Proyectos, Tecnologias, Contacto } from "../components";

export const LayoutPage = () => {
  return (
    <>
        <div className="navegacion">
          <NavBar />
        </div>

        <div 
          id="inicio" 
          className="inicio inicio-2">
          <Inicio />
        </div>

        <div 
          id="proyectos" className="proyectos">
          <Proyectos />
        </div>
        
        <div 
          id="tecnologías"
          className="tecnologias">
          <Tecnologias />
        </div>

        <div 
          id="contacto"
          className="contacto">
          <Contacto />
        </div>
    </>
  )
}
