import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  const [citas, guardarCitas] = useState([]);


  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }


  return (
    <>
    <h1>Administador de Pacientes</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {
            citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
              />
            ))
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
