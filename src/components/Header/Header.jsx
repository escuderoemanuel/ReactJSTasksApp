import './Header.css';
import tasksIcon from '../../assets/images/tasksIcon.png';

export const Header = () => {
  return (
    <div className='header'>
      <h1>Tasks</h1>
      <img
        className='tasksIcon'
        src={tasksIcon}
        alt='Icono de lista de tareas'
      />
    </div>
  );
};
