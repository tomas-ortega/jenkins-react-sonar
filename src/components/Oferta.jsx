import React from 'react'
import { Link, withRouter } from 'react-router-dom'
const Oferta = (props) => {
  const { id, titulo, salario } = props.oferta;
  return (
 
<div>
 
<p>
 
<strong>{titulo}</strong> ({salario}€)
 
<Link to={`${props.match.path}/${id}`}>Ver + detalles</Link>
 
</p>
 
</div>
  )
}
export default withRouter(Oferta);