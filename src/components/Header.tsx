import Button from './elements/Button';
import profilePic from 'assets/images/picture.png';
import { useState } from 'react';
import Input from './elements/Input';
import { NavLink } from 'react-router-dom';
import SearchIcon from 'assets/svgs/search.svg?react';
import LogoIcon from 'assets/svgs/logo.svg?react';
import 'styles/header.css';
import { Sling as Hamburger } from 'hamburger-react';
import NavBar from './elements/Nav';

export const HeaderItems = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (value: string) => {
    console.log(value);
  };

  return (
    <>
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
    </>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo flex-grow-1 flex-lg-grow-0">
        <NavLink to="/" end>
          <LogoIcon width={40} height={40} />
        </NavLink>
      </div>
      {isOpen && (
        <NavBar className='mobile-nav' />
      )}
      <NavBar className="d-none d-lg-block" />
      <div className="header-actions">
        <HeaderItems  />
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="hamburger-menu d-lg-none ps-3">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
};

export default Header;