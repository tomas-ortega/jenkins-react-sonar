import React, { useState, useEffect } from 'react'
import Oferta from './Oferta';
const ListaOfertas = (props) => {
  const [ofertas, setOfertas] = useState([])
  useEffect(() => {
 
fetch('http://localhost:8080/ofertas')
 
.then(resp => resp.json())
 
.then(setOfertas)
  }, [])
  const listaOfertas = ofertas.map(oferta => <Oferta oferta={oferta} key={oferta.id} />)
  return (
 
<div>
 
<h2>Lista ofertas</h2>
 
{listaOfertas}
 
</div>
  )
}
export default ListaOfertas;