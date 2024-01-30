import { useSelector } from "react-redux";
import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material";
import { SideBarItem } from "./SideBarItem";
import { useState } from "react";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { events } = useSelector( state => state.blog ); 

  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeEntrada = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.titulo && event.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (event.autor && event.autor.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (event.contenido && event.contenido.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'white',
    flex: 1,
    padding: '8px',
    outline: 'none',
  };
  
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
      <Drawer
        variant='permanent'
        open
        sx={{ 
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Lista de entradas
          </Typography>

        </Toolbar>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <input
              style={inputStyle}
              type="text"
              autoComplete='off'
              placeholder='Buscar entrada'
              name="buscarEntrada"
              onChange={handleChangeEntrada}
            />
          </Grid>
        <Divider/>
        
        <List>
          {
            filteredEvents.map( event => (
              <SideBarItem key={ event.id_entrada } { ...event }/>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
  
}
