import React, { useContext } from 'react';
import { Avatar, Tooltip, Typography } from '@mui/material';

import { ThemeDispatchContext } from '../contexts/ThemeContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);

  function handleClick(mode) {
    themeDispatch({ value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <Tooltip title={themeContext.user.name}>
          <Avatar
            alt={themeContext.user.name}
            src={themeContext.user.image}
            sx={{ width: 62, height: 62 }}
          />
        </Tooltip>
        <li>
          {themeContext.value === 'light' ? (
            <button onClick={() => handleClick('dark')}>🌙</button>
          ) : (
            <button onClick={() => handleClick('light')}>🌞</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
