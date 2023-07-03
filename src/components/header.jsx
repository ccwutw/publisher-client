import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <NavLink className='navlink' to='/new'>NUEVO</NavLink>
                <NavLink className='navlink' to='/listing'>LISTADO</NavLink>
            </div>
        );
    }
}
 
export default Header;
