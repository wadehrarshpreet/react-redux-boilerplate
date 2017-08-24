import React from 'react';
import {Link} from 'react-router-dom';
export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    let active=this.props.active;
    return(
      <nav className="navbar navbar-default">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Boilerplate</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/" className={active=="home"?"active":""}>Home</Link></li>
          <li><Link to="/about" className={active=="about"?"active":""}>About</Link></li>
          <li><Link to="/contact" className={active=="contact"?"active":""}>Contact</Link></li>
        </ul>
      </div>
    </nav>

    )
  }
}
