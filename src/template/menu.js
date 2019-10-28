import React from 'react';

export default props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#/todos">Navbar</a>
        <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#/todos">Tarefas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/sobre">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)