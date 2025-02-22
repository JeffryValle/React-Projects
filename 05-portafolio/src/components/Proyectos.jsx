import '../css/proyectos.css';
import proyecto1 from '../img/01-tienda.jpg';
import proyecto2 from '../img/02-restaurant.jpg';
import proyecto3 from '../img/03-todo.jpg';
import proyecto4 from '../img/04-planilla.jpg';

export const Proyectos = () => {
  return (
    <>
    <div className='proyectos-title'>
        <h1>Proyectos</h1>
    </div>
    <div className="proyectos-contenido">

        <div className='proyectos-contenido-card'>
            <h3>Tienda</h3>
            <img src={proyecto1} alt='Imagen Proyecto' />
        </div>
        <div className='proyectos-contenido-card'>
            <h3>Restaurante </h3>
            <img src={proyecto2} alt='Imagen Proyecto' />
        </div>
        <div className='proyectos-contenido-card'>
            <h3>ToDo App</h3>
            <img src={proyecto3} alt='Imagen Proyecto' />
        </div>
        <div className='proyectos-contenido-card'>
            <h3>CRUD</h3>
            <img src={proyecto4} alt='Imagen Proyecto' />
        </div>

    </div>
    </>
  )
}
