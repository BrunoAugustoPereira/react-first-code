import React from 'react';

class Navbar extends React.Component{
  render(){
    let colornav="nav-wrapper "+this.props.Color;
    return (
      <nav>
        <div className={colornav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.Title}</a>
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
