import { TableCell, TableHead, TableRow } from "@mui/material"

export const Titulos = () => {
  return (
    <TableHead className="titulos">
        <TableRow className="registros">
            <TableCell>Id</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Identidad</TableCell>
            <TableCell align="right">Cargo</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="center">Accion</TableCell>
        </TableRow>
    </TableHead>
  )
}
