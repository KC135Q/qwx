import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Weather by Q</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <input type='text' className='city' placeholder='City, State'></input>
            </li>
            <li>
              <button className="btn" type="submit" name="action">Get Weather</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;