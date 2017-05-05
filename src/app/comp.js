import React, {Component} from 'react';

import {Prop} from './prop';
import {Method} from './method';

export class Comp extends Component {

  constructor(props) {
    super(props);
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.properties = this.props.comp.docs.length ? this.props.comp.docs[0].props : null;
    this.methods = this.props.comp.docs.length ? this.props.comp.docs[0].methods : null;

    this.state = {
      expanded: 'false'
    };
  }

  getProperties() {
    if (this.properties) {
      return (
        <div>
          <h3>Properties</h3>
          {Object.keys(this.properties).map(key => (
            <Prop prop={this.properties[key]} name={key} key={key}/>
          ))}
        </div>
      );
    }
  }

  getMethods() {
    if (this.methods) {
      const methodKeys = Object.keys(this.methods);
      if (methodKeys.length) {
        return (
          <div>
            <h3>Methods</h3>
            {methodKeys.map(key => (
              <Method method={this.methods[key]} key={key}/>
            ))}
          </div>
        );
      }
    }
  }

  toggleComponent() {
    if (this.state.expanded === 'true') {
      this.setState({expanded: 'false'});
    } else {
      this.setState({expanded: 'true'});
    }
  }

  handleClickHeader() {
    this.toggleComponent();
  }

  render() {
    return (
      <li className="comp panel panel-default">
        <div className="panel-heading" onClick={this.handleClickHeader}>
          <h2 className="panel-title">{this.props.comp.name}</h2>
        </div>
        <div className="panel-body" data-expanded={this.state.expanded}>
          <p className="panel-title">{this.props.comp.path}</p>
          {this.getProperties()}
          {this.getMethods()}
          <pre>{JSON.stringify(this.props.comp, null, '\t')}</pre>
        </div>
      </li>
    );
  }
}

Comp.propTypes = {
  comp: React.PropTypes.object.isRequired
};
