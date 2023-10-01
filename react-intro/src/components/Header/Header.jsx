import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to='/QuizMain/'>QUIZ GAME</Link>
      <nav className="nav">
        <ul className="menu">
          <li><a href="#">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
}
