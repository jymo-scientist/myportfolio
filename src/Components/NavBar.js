import React from 'react';
import avatar from '../imgs/89.jpg';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
        <nav className="nav">
            <div className="profile">
                <img src={avatar}alt="yoh"/>
                </div>
             <ul className="nav-items">
                    <li className="nav-item">
                          <NavLink to="/" exact activeClassName="active">
                              Home
                          </NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink to="/about" exact activeClassName="active">
                              About
                          </NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                          </NavLink>
                    </li>
                    <li className="nav-item">
                          <NavLink to="/portfolios" exact activeClassName="active">
                              Portfolios
                          </NavLink>
                    </li>
                       <li className="nav-item">
                          <NavLink to="/contacts" exact activeClassName="active">
                              Contacts
                          </NavLink>
                    </li>
                </ul>
                <footer className ="footer">
                  <p>@2021 wakabajames </p>
                 </footer>
            </nav>   
        </div>
        
    );
}

export default NavBar
