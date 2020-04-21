import
import
import
import
import
import
React from 'react';
{ Route, Switch, Redirect } from 'react-router-dom';
ListaOfertas from './components/ListaOfertas';
Form from './components/Form';
Nav from './components/Nav';
OfertaDetallada from './components/OfertaDetallada';
class App extends React.Component {
  render() {
 
return (
 
<div>
 
<Nav />
 
<Switch>
 
<Route path="/ofertas/:id" component={OfertaDetallada} />
 
<Route path="/editar-oferta/:id" component={Form} />
 
<Route path="/ofertas" component={ListaOfertas} />
 
<Route path="/nueva-oferta" component={Form} />
 
<Redirect from="/" exact to="/ofertas" />
 
</Switch>
 
</div>
 
);
  }
}
export default App;