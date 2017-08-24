import React from 'react';
import Header from './Header';
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
          {this.props.children}
        </main>
      </div>
    )
  }
}
