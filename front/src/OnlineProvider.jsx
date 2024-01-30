import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setOnline } from './store';

const OnlineProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { onlineStatus:isOnline } = useSelector( state => state.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      dispatch(setOnline(navigator.onLine))
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    const mostrarAlerta = async () => {
      await Swal.fire('Estás fuera de línea', 'La aplicación seguirá funcionando, pero algunas características pueden estar limitadas.', 'info');
    };

    if (isOnline != true) {
      mostrarAlerta();
    }
  }, [isOnline]);

  return (
    <div>
      {children}
    </div>
  );
};

export default OnlineProvider;