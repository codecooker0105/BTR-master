import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.png';

class Header extends Component {
  render() {
    return (
      <div className="header shadow-object">
        <div className="container v-c">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header-links v-c">
            <NavLink to="#">About Us</NavLink>
            <NavLink to="#">Shop</NavLink>
            <NavLink to="#">Avatar</NavLink>
            <NavLink to="#">Closet</NavLink>
            <NavLink to="#">Faq</NavLink>
            <NavLink to="#"><img src={search} alt="search" /></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
