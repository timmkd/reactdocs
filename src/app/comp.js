import React, {Component} from 'react';

import {Prop} from './prop';
import {Method} from './method';

export class Comp extends Component {

  showProperties() {
    if (this.props.comp.props) {
      return (
        <div>
          <h3>Properties</h3>
          {Object.keys(this.props.comp.props).map(key => (
            <Prop prop={this.props.comp.props[key]} name={key} key={key}/>
          ))}
        </div>
      );
    }
  }

  showMethods() {
    const methodKeys = Object.keys(this.props.comp.methods);
    if (methodKeys.length) {
      return (
        <div>
          <h3>Methods</h3>
          {methodKeys.map(key => (
            <Method method={this.props.comp.methods[key]} key={key}/>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <li className="comp panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">{this.props.comp.key}</h2>
        </div>
        <div className="panel-body">
          {this.showProperties()}
          {this.showMethods()}
          <pre>{JSON.stringify(this.props.comp, null, '\t')}</pre>
        </div>
      </li>
    );
  }
}

Comp.propTypes = {
  comp: React.PropTypes.object.isRequired
};
