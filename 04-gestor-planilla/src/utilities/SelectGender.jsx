import { useContext } from 'react';
import { Contexto } from '../context/Provider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectGender = () => {

    const { gender, setGender, handleChangeGender } = useContext(Contexto);

    return (
        <Box sx={{ minWidth: 120 } } className='caja'>
          <FormControl fullWidth className='form-control option'>
            <Select className='form-input'
              value={gender}
              onChange={handleChangeGender}
            >
              <MenuItem value='Seleccione' disabled>--Seleccione--</MenuItem>
              <MenuItem value='Masculino'>Masculino</MenuItem>
              <MenuItem value='Femenino'>Femenino</MenuItem>
              <MenuItem value='Otro'>Otro</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
}
