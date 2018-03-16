import React from 'react';

class NavMenu extends React.Component{

  render(){
    let list = this.props.menu.map(function(ListItem){
      return(
        <li key = {ListItem.Title} ><a href={ListItem.Link}>{ListItem.Title}</a></li>
      );
    });
    
    return (
      <ul id="nav-mobile" className="right">
        {list}
      </ul>
    );
  }
}

export default NavMenu;
