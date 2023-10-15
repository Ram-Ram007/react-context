import React, { useContext } from 'react';
import { Button, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { ThemeDispatchContext } from '../contexts/ThemeContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);

  function handleClick(mode) {
    themeDispatch({ value: mode });
  }

  const tooltip = (
    <Tooltip id="tooltip">
      {themeContext.user.name}
    </Tooltip>
  );

  return (
    <Navbar className="container">
      <Navbar.Brand>
        <strong>Brand</strong>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <OverlayTrigger placement="top" overlay={tooltip}>
              <span className="nav-link">
                <img
                  alt={themeContext.user.name}
                  src={themeContext.user.image}
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
              </span>
            </OverlayTrigger>
          </li>
          <li className="nav-item">
            {themeContext.value === 'light' ? (
              <Button onClick={() => handleClick('dark')}>🌙</Button>
            ) : (
              <Button onClick={() => handleClick('light')}>🌞</Button>
            )}
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
