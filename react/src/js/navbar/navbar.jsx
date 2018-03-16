import React from 'react';

class Navbar extends React.Component{
  render(){
    let menu =[
      {Title:"Home",Link:"#home"},
      {Title:"AboutUs",Link:"#aboutus"},
      {Title:"Contact",Link:"#contact"}
    ];

    let list =menu.map(function(ListItem){
      return(
        <li key = {ListItem.Title} ><a href={ListItem.Link}>{ListItem.Title}</a></li>
      );
    });

    let colornav="nav-wrapper "+this.props.Color;
    return (
      <nav>
        <div className={colornav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.Title}</a>
            <ul id="nav-mobile" className="right">
              {list}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
