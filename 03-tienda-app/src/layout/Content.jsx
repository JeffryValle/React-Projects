import { Navigate, Route, Routes } from "react-router";
import { Hogar, Electronicos, Ropa, Deportes, Utensilios } from '../components';


export const Content = () => {



  return (
    <Routes>
      <Route path="Hogar" element={ <Hogar />} />
      <Route path="Electronicos" element={ <Electronicos />} />
      <Route path="Ropa" element={ <Ropa />} />
      <Route path="Deportes" element={ <Deportes />} />
      <Route path="Utensilios" element={ <Utensilios />} />

      <Route path="/*" element={ <Navigate to="/Hogar" />} />
    </Routes>
  )
}
 