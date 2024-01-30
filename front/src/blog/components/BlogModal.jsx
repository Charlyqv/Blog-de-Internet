import { useEffect, useMemo, useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Modal from "react-modal";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from 'date-fns/locale/es';
import { useBlogStore, useUiStore } from "../../hooks";

import Axios from 'axios';
import { useDispatch } from "react-redux";

import { addNewEntrada, setEntradas } from "../../store";

registerLocale('es', es);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const BlogModal = () => {

  const { isDateModalOpen, closeDateModal } = useUiStore();
    
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    titulo: '',
    autor: '',
    entrada: '',
    start: new Date(),
  });

  const tituloClass = useMemo(() => {
    if ( !formSubmitted ) return '';

    return ( formValues.titulo.length > 0)
      ? ''
      : 'is-invalid';

  }, [ formValues.titulo, formSubmitted ])

  const autorClass = useMemo(() => {
    if ( !formSubmitted ) return '';

    return ( formValues.autor.length > 0)
      ? ''
      : 'is-invalid';

  }, [ formValues.autor, formSubmitted ])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get')
    .then((response) => {
      dispatch(setEntradas(response.data));
    })
  }, [dispatch]);
  
  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onCloseModal = () => {
    closeDateModal();
  }

  const onSubmit = async ( event ) => {
    event.preventDefault();

    if ( formValues.titulo == '' || formValues.autor == '' || formValues.start == null || formValues.entrada == ''){
      Swal.fire('Entrada incorrecta','Todos los campos son obligatorios', 'error');
      return;
    }

    const fechaOriginal = new Date(formValues.start);
    const año = fechaOriginal.getFullYear();
    const mes = ('0' + (fechaOriginal.getMonth() + 1)).slice(-2);  // Sumamos 1 al mes porque los meses en JavaScript van de 0 a 11
    const dia = ('0' + fechaOriginal.getDate()).slice(-2);

    const fechaFormateada = `${año}-${mes}-${dia}`;

    Axios.post('http://localhost:3001/api/insert',{
      titulo: formValues.titulo,
      autor: formValues.autor,
      fecha: fechaFormateada,
      contenido: formValues.entrada,
    }).then((response) => {
      if(response.statusText == 'OK'){
        Swal.fire('Entrada correcta','Información registrada con éxito', 'success');
        dispatch(addNewEntrada({
          titulo: formValues.titulo,
          autor: formValues.autor,
          fecha: fechaFormateada,
          contenido: formValues.entrada,
        }));
      }
    })

    closeDateModal();  
  }

  return (
    <Modal
      isOpen={ isDateModalOpen }
      onRequestClose={ onCloseModal }
      style={ customStyles }
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
    <h1 className="nuevo"> Nueva entrada </h1>
    <hr />
    <form className="container" onSubmit={ onSubmit }>
      <div className="form-group mb-2">
        <label>Título</label>
        <input 
          type="text" 
          className= { `form-control ${ tituloClass }`}
          placeholder="Título de la entrada"
          name="titulo" 
          autoComplete="off"
          value={ formValues.titulo }
          onChange={ onInputChanged }
        />
      </div>

      <div className="form-group mb-3">
        <label>Autor</label>
        <input 
          type="text" 
          className= { `form-control ${ autorClass }`}
          placeholder="Nombre de quien publica la entrada"
          name="autor" 
          autoComplete="off"
          value={ formValues.autor }
          onChange={ onInputChanged }
        />
      </div>
      <div className="form-group mb-2">
        <label>Fecha de publicación &nbsp;</label>
        <DatePicker 
          className="form-control"
          dateFormat="Pp"
          showTimeSelect
          locale="es"
          timeCaption="Hora"
          selected={ formValues.start }
        />
      </div>

      <div className="form-group mb-2">
        <label>Contenido</label>
        <textarea 
          type="text" 
          className="form-control"
          placeholder="Escrito breve"
          rows="4"
          name="entrada"
          value={ formValues.entrada }
          onChange={ onInputChanged }
        ></textarea>
      </div>
    
      <button
        type="submit"
        className="btn btn-outline-primary btn-block"
      >
        <i className="far fa-save"></i>
        <span> Guardar</span>
      </button>

    </form>
    </Modal>
  )
}