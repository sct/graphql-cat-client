import React from 'react';
import { Link } from '@reach/router';
import title from '../assets/images/title.gif';
import construction from '../assets/images/construction.gif';
import './Layout.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <div className="title">
      <img src={title} alt="Amazing Cat Example" />
    </div>
    <nav className="nav">
      <h1>
        <span role="img" aria-label="cat emojis">
          🐱🐱🐱
        </span>{' '}
        The ultimate cat api app
      </h1>
      <Link to="/">
        <span role="img" aria-label="Dice">
          🎲
        </span>{' '}
        Random Cat
      </Link>{' '}
      - <Link to="/search">Search for a breed</Link>
    </nav>
    <div>{children}</div>
    <div className="construction">
      <img src={construction} alt="Under Construction" />
    </div>
  </div>
);

export default Layout;
