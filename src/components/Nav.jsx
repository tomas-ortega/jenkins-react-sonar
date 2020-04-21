import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
 
    return (
    
        <nav>
        
        <Link to="/ofertas">Listado de ofertas</Link>
        
        <Link to="/nueva-oferta">Nueva oferta</Link>
        
        </nav>
    )
    }
}