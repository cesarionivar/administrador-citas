import React, { useState } from 'react'

const Formulario = () => {


  // Crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });


  // Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  }


  const { mascota, propietario, fecha, hora, sintomas } = cita;


  return (  
    <>
    <h2>Crear Cita</h2>
    <form>
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