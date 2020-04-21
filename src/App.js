import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListaOfertas from './components/ListaOfertas';
import Form from './components/Form';
import Nav from './components/Nav';
import OfertaDetallada from './components/OfertaDetallada';

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
