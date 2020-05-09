import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Network Statistic
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/descritiva">
              Descritiva
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/repository">
              Probabilidade
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/repository">
              Correlação e Regressão
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
