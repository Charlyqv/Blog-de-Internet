import { Article } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { onSetActiveEvent } from '../../store';

export const SideBarItem = ({ id_entrada, titulo, autor, fecha, contenido }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch( onSetActiveEvent({ id_entrada, titulo, autor, fecha, contenido }) );
  }

  const newTitle = useMemo ( () => {
    if (titulo && titulo.length > 17) {
      return titulo.substring(0, 17) + '...';
    } else {
      return titulo;
    }
  }, [ titulo ]);

  const newBody = useMemo ( () => {
    if (contenido && contenido.length > 23) {
      return contenido.substring(0, 23) + '...';
    } else {
      return contenido;
    }
  }, [ contenido ]);
  
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <Article></Article>
        </ListItemIcon>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {newTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {newBody}
            </Typography>
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
