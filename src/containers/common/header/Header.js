/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { SystemHelper } from '../../../helper/SystemHelper';

export const Header = props => {
  return (
    <header className="header-container header-bg" data-test="header-component">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">{SystemHelper.PROJECT_NAME}</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </header>
  );
};
