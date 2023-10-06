import './Tarea.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={completada ? 'tareaContainer completada' : 'tareaContainer'}>
      <div className='tareaText'>{texto}</div>
      <div className='tareaContainerIcons' onClick={() => completarTarea(id)}>
        <AiOutlineCheckCircle className='tareaIcon complete' />
      </div>
      <div className='tareaContainerIcons' onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tareaIcon delete' />
      </div>
    </div>
  );
}

export default Tarea;
