
import { Content } from "./Content";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export const MainApp = () => {

  

  return (
      <div className="app">
        {/* Contenido a la izquierda */}
        <div className="sidebar">
          <SideBar />
        </div>

        {/* Contenido a la derecha */}
        <div className="derecha">
          <div className="navbar">
            <NavBar />
          </div>

          <div className="content">
            <Content />          
          </div>
        </div>
    </div>
  )
}
