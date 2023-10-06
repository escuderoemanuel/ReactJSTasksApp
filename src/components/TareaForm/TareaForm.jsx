import { useState } from 'react';
import './TareaForm.css';
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props) {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      // Genero ID con la tool uuid
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    setInput('');
    // Es lo que va a ocurrir al enviar el form
    props.onSubmit(tareaNueva);
  };
  return (
    <form className='tareaForm' onSubmit={manejarEnvio}>
      <input
        type='text'
        className='tareaInput'
        placeholder='Ingresa una tarea'
        name='text'
        value={input}
        onChange={manejarCambio}
      />
      <button className='btnTarea'> Agregar Tarea </button>
    </form>
  );
}

export default TareaForm;
