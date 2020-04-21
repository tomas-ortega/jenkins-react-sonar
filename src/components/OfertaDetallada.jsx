import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
const handleEliminar = (id, history) => {
  fetch(`http://localhost:8080/ofertas/${id}`, {
  method: 'DELETE'
  })
  .then(resp => resp.json())
  .then(r => {
 
history.push('/ofertas')
  })
}
const getOferta = (id, setOferta) => {
  fetch(`http://localhost:8080/ofertas/${id}`)
  .then(resp => resp.json())
  .then(oferta => {
 
setOferta(oferta);
  })
}
const OfertaDetallada = (props) => {
  const [oferta, setOferta] = useState({});
  const history = useHistory();
  const { id } = useParams();
  console.log('Pasa')
  useEffect(() => {
  getOferta(id, setOferta);
  }, [id])
  return (
  <div>
 
<pre>{JSON.stringify(oferta, null, 4)}</pre>
 
<button type="button" onClick={() => history.push('/editar-oferta/' + oferta.id)}>Editar</button>
 
<button type="button" onClick={() => handleEliminar(oferta.id, history)}>Eliminar</button>
  </div>
  )
}
export default OfertaDetallada;