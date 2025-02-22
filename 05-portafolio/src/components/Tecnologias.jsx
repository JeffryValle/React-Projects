import '../css/tecnologias.css';
import { imagenes } from '../img/index.js';
import jinwoo from '../img/jin-woo.jpg'
import bootstrap from '../img/bootstrap.svg'
import css3 from '../img/css3.svg'
import firebase from '../img/firebase.svg'
import html5 from '../img/html5.svg'
import java from '../img/java.svg'
import javascript from '../img/javascript.svg'
import json from '../img/json.svg'
import materialui from '../img/materialui.svg'
import microsoftsqlserver from '../img/microsoftsqlserver.svg'
import mysql from '../img/mysql.svg'
import netlify from '../img/netlify.svg'
import npm from '../img/npm.svg'
import react from '../img/react-color.svg'
import reactrouter from '../img/reactrouter.svg'
import redux from '../img/redux.svg'
import vitejs from '../img/vitejs.svg'
import vscode from '../img/vscode.svg'


export const Tecnologias = () => {

  return (
    <>
    <div className='tecnologias-title'>
        <h1>Tecnologias</h1>
    </div>

    <div className="tecnologias-contenido">

          <div className='tecnologias-contenido-item'>
            <img src={bootstrap} alt="Imagen de Bootstrap"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={css3} alt="Imagen de css3"/>
          </div> 
          <div className='tecnologias-contenido-item'>
            <img src={firebase} alt="Imagen de firebase"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={html5} alt="Imagen de html5"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={java} alt="Imagen de java"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={javascript} alt="Imagen de javascript"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={json} alt="Imagen de json"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={materialui} alt="Imagen de materialui"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={microsoftsqlserver} alt="Imagen de microsoftsqlserver"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={mysql} alt="Imagen de mysql"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={netlify} alt="Imagen de netlify"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={mysql} alt="Imagen de mysql"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={npm} alt="Imagen de npm"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={react} alt="Imagen de react"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={reactrouter} alt="Imagen de reactrouter"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={redux} alt="Imagen de redux"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={vitejs} alt="Imagen de vitejs"/>
          </div>
          <div className='tecnologias-contenido-item'>
            <img src={vscode} alt="Imagen de vscode"/>
          </div>


    </div>
    </>
  )
}

