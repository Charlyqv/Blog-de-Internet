import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

export const NoteView = () => {

  const { activeEvent:entrada } = useSelector( state => state.blog );

  const { id_entrada, titulo, autor, fecha, contenido, onInputChange} = useForm( entrada );

  const fechaOriginal = new Date(fecha);
    const año = fechaOriginal.getFullYear();
    const mes = ('0' + (fechaOriginal.getMonth() + 1)).slice(-2);  // Sumamos 1 al mes porque los meses en JavaScript van de 0 a 11
    const dia = ('0' + fechaOriginal.getDate()).slice(-2);

    const fechaFormateada = `${dia}-${mes}-${año}`;

  return (
    <Grid 
      container 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center' 
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid container>
        
      <Typography fontSize={ 20 } fontWeight='light'>Título</Typography>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          fullWidth
          margin="dense"
          InputProps={{
            readOnly: true,
          }}
          value={ titulo }
        />

      <Typography fontSize={ 20 } fontWeight='light'>Autor</Typography>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="dense"
          value={ autor }
        />

      <Typography fontSize={ 20 } fontWeight='light'>Fecha de publicación:</Typography>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          fullWidth
          margin="dense"
          InputProps={{
            readOnly: true,
          }}
          value={ fechaFormateada } 
        />

        <Typography fontSize={ 20 } fontWeight='light'>Contenido</Typography>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="dense"
          value={ contenido }
        />
      </Grid>
    </Grid>
  )
}
