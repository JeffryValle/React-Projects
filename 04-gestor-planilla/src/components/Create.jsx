import { Box, Modal, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { Contexto } from "../context/Provider";
import { Formulario } from "./Formulario";

export const Create = () => {

    const { open, setOpen, handleClose, handleOpen } = useContext(Contexto);

  return (
    <>
    <button 
        onClick={handleOpen}
        className="editar crear"    
    >Crear
    </button> 

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className='styled' >
            <h2>Crear Empleado</h2>

            <h3>Llene el formulario</h3>
            <hr />
            <Formulario />
        </Box>
    </Modal>
    </>
  )
}
