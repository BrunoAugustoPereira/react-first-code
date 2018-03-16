import React from 'react';

import NavMenu from './nav-menu';

class Navbar extends React.Component{
  render(){
    let menu =[
      {Title:"Home",Link:"#home"},
      {Title:"AboutUs",Link:"#aboutus"},
      {Title:"Contact",Link:"#contact"}
    ];

    let colornav="nav-wrapper "+this.props.Color;
    return (
      <nav>
        <div className={colornav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.Title}</a>
            <NavMenu menu={menu} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
