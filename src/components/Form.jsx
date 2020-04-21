import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
const handleSubmit = (e, oferta, history) => {
e.preventDefault();
// let url = 'http://localhost:8080/EjemploRest/ofertas';
let url = 'http://localhost:8080/ofertas';
let method = 'POST';
if (oferta.id) {
url += `/${oferta.id}`

method = 'PUT';
}
fetch(url, {
method: method,
body: JSON.stringify(oferta),
headers: {
'Content-Type': 'application/json',
}
})
.then(resp => resp.json())
.then((resp) => {
history.push('/ofertas');
})
.catch(console.log);
}
const getOferta = (id) => {
return fetch('http://localhost:8080/ofertas/' + id)
.then(resp => resp.json())
.then(oferta => {return oferta})
}
const Form = (props) => {
const [id, setId] = useState(null)
const [titulo, setTitulo] = useState('')
const [descripcion, setDescripcion] = useState('')
const [empresa, setEmpresa] = useState('')
const [ciudad, setCiudad] = useState('')
const [salario, setSalario] = useState(20000)
const history = useHistory();
const params = useParams();
useEffect(() => {
if (params.id) {
getOferta(params.id)
.then(({id, titulo, descripcion, empresa, salario, ciudad}) => {
setId(id)
setTitulo(titulo)
setDescripcion(descripcion)
setEmpresa(empresa)
setCiudad(ciudad)
setSalario(salario)
})
}
}, [params.id])
return (
<form onSubmit={(e) => handleSubmit(e, {id, titulo, descripcion, empresa, ciudad, salario}, history)}>
<div>
<label htmlFor="titulo">Titulo:</label>
<input type="text" name="titulo" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
</div>
<div>
<label htmlFor="descripcion">Descripción:</label>
<input type="text" name="descripcion" id="descripcion" value={descripcion} onChange={(e) =>
setDescripcion(e.target.value)} />
</div>
<div>
<label htmlFor="salario">Salario:</label>
<input type="number" name="salario" id="salario" value={salario} onChange={(e) => setSalario(e.target.value)} />
</div>
<div>
<label htmlFor="empresa">Empresa:</label>
<input type="text" name="empresa" id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
</div>
  <div>
<label htmlFor="ciudad">Ciudad:</label>
<input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
</div>
<button type="submit">Guardar</button>
</form>
)
}
export default Form;
