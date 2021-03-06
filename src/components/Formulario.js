import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {


  // Crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  
  const [error, actualizarError] = useState(false);


  // Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  }


  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();

    // Validar
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }

    // Eliminar el mensaje previo
    actualizarError(false);
    
    // Asignar un ID
    cita.id = uuid();
    
    // Crear la citas
    crearCita(cita);

    // Reiniciar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  }



  return (  
    <>
    <h2>Crear Cita</h2>

    {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

    <form
      onSubmit={submitCita}
    >
      <label>Nombre Mascota</label>
      <input 
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
        onChange={actualizarState}
        value={mascota}
      />

      <label>Nombre Dueño</label>
      <input 
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre Dueño de la Mascota"
        onChange={actualizarState}
        value={propietario}
      />

      <label>Fecha</label>
      <input 
        type="date"
        name="fecha"
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}
      />

      <label>Hora</label>
      <input 
        type="time"
        name="hora"
        className="u-full-width"
        onChange={actualizarState}
        value={hora}
      />

      <label>Sintomas</label>
      <textarea 
        className="u-full-width" 
        name="sintomas"
        onChange={actualizarState}
        value={sintomas}
      >
      </textarea>

      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

    </form>
    </>
  );
}
 
export default Formulario;