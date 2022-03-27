import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <div className={s.nav}>
      <ul>
        <li className={s.nav__item}><NavLink className={navData => navData.isActive ? s.nav__linkActive + ' ' + s.nav__link : s.nav__link} to="/">Home</NavLink></li>
        <li className={s.nav__item}><NavLink className={navData => navData.isActive ? s.nav__linkActive + ' ' + s.nav__link : s.nav__link} to="/Posts">Posts</NavLink></li>
        <li className={s.nav__item}><NavLink className={navData => navData.isActive ? s.nav__linkActive + ' ' + s.nav__link : s.nav__link} to="/About">About</NavLink></li>
        <li className={s.nav__item}><NavLink className={navData => navData.isActive ? s.nav__linkActive + ' ' + s.nav__link : s.nav__link} to="/Contacts">Contacts</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;
