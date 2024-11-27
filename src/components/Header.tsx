import Button from './elements/Button';
import profilePic from 'assets/images/picture.png';
import { useState } from 'react';
import Input from './elements/Input';
import { NavLink } from 'react-router-dom';
import SearchIcon from 'assets/svgs/search.svg?react';
import LogoIcon from 'assets/svgs/logo.svg?react';
import 'styles/header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (value: string) => {
    console.log(value);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          <LogoIcon width={40} height={40} />
        </NavLink>
      </div>
      <nav className="nav">
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
      </nav>
      <div className="header-actions">
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          icon={<SearchIcon width={16} height={16} stroke="#737A91" />}
          variant="outline"
        />
        <Button
          label="Resume Builder"
          onClick={() => handleClick('Primary')}
          variant="primary"
          size="lg"
        />
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;