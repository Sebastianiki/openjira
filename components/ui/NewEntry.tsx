import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

  const { addEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry} = useContext(UIContext)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextFieldChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue( event.target.value )
  }

  const onSave = () => {
    if(inputValue.length === 0) return
    addEntry(inputValue)
    setIsAddingEntry(false)
    setTouched(false)
    setInputValue('')
  }

  return (
    <Box
      sx={{
        marginBottom: 2
      }}
    >
      {
        isAddingEntry
          ? (
            <>
              <TextField
                fullWidth
                sx={{
                  marginTop: 2,
                  marginBottom: 1,
                }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                value={inputValue}
                onChange={onTextFieldChange}
                error={ inputValue.length <= 0 && touched }
                helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                onBlur={ () => setTouched(true) }
              />
              <Box
                display='flex'
                justifyContent='flex-end'
              >
                <Button
                  variant='outlined'
                  color='error'
                  endIcon={<CloseOutlinedIcon/>}
                  onClick={() => setIsAddingEntry(false)}
                >
                  Cancelar
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={<SaveOutlinedIcon/>}
                  sx={{
                    marginLeft: 1
                  }}
                  onClick={onSave}
                >
                  Guardar
                </Button>
              </Box>
            </>
          )
          : (
            <Button
              variant='outlined'
              startIcon={<AddCircleOutlineOutlinedIcon/>}
              fullWidth
              onClick={() => setIsAddingEntry(true)}
            >
              Agregar Tarea
            </Button>
          )
      }
    </Box>
  )
}
