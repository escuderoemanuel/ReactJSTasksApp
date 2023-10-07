import TareaForm from '../TareaForm/TareaForm';
import Tarea from '../Tarea/Tarea';
import './ListaTareas.css';
import { useEffect, useState } from 'react';

function ListaTareas() {
  //El estado inicial de tareas es un array vacío
  const [tareas, setTareas] = useState(
    // Cargar tareas desde el localStorage si las hay
    JSON.parse(localStorage.getItem('tareas'))
  );

  // Guardar tareas en el localStorage como cadena JSON
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
    //Sería lo mismo que hacer:
    //setTareas(tareas.filter((tarea) => tarea.id !== id);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaForm onSubmit={agregarTarea} />
      <div className='containerListaTarea'>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;
