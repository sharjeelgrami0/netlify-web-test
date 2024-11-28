import { NavLink } from 'react-router-dom';
import { HeaderItems } from '../Header';

interface NavBarProps {
    className?: string
}

const NavBar = ({className = ''}: NavBarProps) => {
  return (
    <nav className={`${className} nav`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Find Jobs
        </NavLink>
        <NavLink to="/top-companies" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Top Companies
        </NavLink>
        <NavLink to="/job-tracker" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Job Tracker
        </NavLink>
        <NavLink to="/my-calendar" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        My Calendar
        </NavLink>
        <NavLink to="/documents" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Documents
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Messages
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? 'color-blue' : '')}>
        Notifications
        </NavLink>
        <HeaderItems  />
    </nav>
  );
};

export default NavBar;