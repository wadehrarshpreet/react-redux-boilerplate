import React from 'react';
import { Header, Home, About, Contact } from '../Component/';
import { Router, Switch, Route } from 'react-router-dom';
import '../Style/style.scss';
export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header active={this.props.active}/>
        <main>
          <Switch>
      		<Route exact path="/" render={() => <Home /> }/>
      		<Route exact path="/about" render={() => <About /> }/>
      		<Route exact path="/contact" render={() => <Contact /> }/>
    	  </Switch>
        </main>
      </div>
    )
  }
}
