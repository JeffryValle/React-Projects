import { useState } from "react";
import { Grid } from "./components/Grid"
import { NavBar } from "./components/NavBar"
import { GridMenu } from "./pages/GridMenu";
import { Link } from "react-router";

export const RestaurantApp = () => {

  const [state, setState] = useState();


  const handleClick = (event) => {
    event.preventDefault();
    setState(event.target.innerText);
  };


  return (
    <div className="contenedorAlfa">
        <NavBar />
        <div>
            
            {
              ( !state ) 
              ? <Grid handleClick={handleClick}/>
              : <GridMenu state={state}/>
            }
            
            
        </div>
    </div>
    
  )
}
