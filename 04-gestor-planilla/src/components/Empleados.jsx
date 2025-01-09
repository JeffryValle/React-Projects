import { useContext } from "react";
import { Contexto } from "../context/Provider";
import { Titulos } from "./Titulos";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Create } from "./Create";


export const Empleados = () => {
  
    const values = useContext(Contexto);

    const { listaEmpleados, isSelected, setIsSelected, user, setUser } = values;

    const onDelete = () => {
      setIsSelected(!isSelected);
    };

    return (
      <>
        <div className="contenedor-superior">
          <h1>Planilla</h1>
                
            <Create />
        </div>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="customized table">
          <Titulos />
          <TableBody>
            {
              listaEmpleados.map(({id, nombre, apellido, identidad, cargo, genero, edad, codigo}) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },}}
                  className="registros"
                >
                  <TableCell align="right">{id}</TableCell>
                  
                  <TableCell  
                    scope="row"
                  >
                    {nombre}
                  </TableCell>
                  <TableCell align="right">{apellido}</TableCell>
                  <TableCell align="right">{identidad}</TableCell>
                  <TableCell align="right">{cargo}</TableCell>
                  <TableCell align="right">{genero}</TableCell>
                  <TableCell align="right">{edad}</TableCell>
                  <TableCell align="right">{codigo}</TableCell>
                  <TableCell align="right">
                    <div className="botones">
                      <button className="editar">Editar</button>
                       {
                         (!isSelected)
                         ? <button className="eliminar"
                            onClick={ onDelete }>Eliminar</button>
                         : <div className="isSelect">
                            <button 
                              className="bt1"
                              onClick={ onDelete }
                            ><CheckCircleIcon /></button>
                            <button 
                              className="bt2"
                              onClick={ onDelete }
                            ><DoDisturbIcon /></button>
                          </div>
                       }
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
