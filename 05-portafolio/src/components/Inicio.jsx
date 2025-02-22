import '../css/inicio.css';
import foto from '../img/imagen-personal.jpg';


export const Inicio = () => {
  return (
    <>
        <div className='inicio-left'>
            <div className='inicio-left-item'>
                <img
                src={foto}
                alt="Imagen de perfil"
                />
            </div>
        </div>


        <div className='inicio-right'>
            <blockquote>
            <p className='inicio-right-p'>&quot;Estudiante de <strong>Ingeniería en Sistemas</strong> con sueños de ser más grande que ayer.&quot;</p>
            </blockquote>
            
        </div>
    </>
  )
}
