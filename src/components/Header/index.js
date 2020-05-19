import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Pokemon API" />
        </Link>
      </div>
    </Container>
  );
}
