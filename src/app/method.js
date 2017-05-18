import React, {Component} from 'react';

import {Param} from './param';

export class Method extends Component {

  constructor(props) {
    super(props);
    this.getParams = this.getParams.bind(this);
    this.paramsList = this.paramsList.bind(this);
    this.getDocBlock = this.getDocBlock.bind(this);
  }

  getParams() {
    if (this.props.method.params) {
      return (
        <div className="method--params">
          <ul className="list-unstyled">
            {this.props.method.params.map((param, i) => (
              <Param key={i} param={param}/>
            ))}
          </ul>
        </div>
      );
    }
  }
  getReturns() {
    let type = null;

    if (this.props.method.returns) {
      if (this.props.method.returns.type) {
        type = (<span className="param--type"> {this.props.method.returns.type.name}</span>);
      }

      return (
        <div className="method--returns">
          <h5>Returns {type}</h5>
          <p className="method--description">{this.props.method.returns.description}</p>
        </div>
      );
    }
  }

  paramsList() {
    if (this.props.method.params) {
      const params = this.props.method.params;
      const keys = Object.keys(params);
      let paramsList = '';

      keys.map((key, i) => {
        paramsList += params[key].name;

        if (keys.length !== i + 1) {
          paramsList += ', ';
        }
        return true;
      });

      return paramsList;
    }
  }

  getDocBlock() {
    if (this.props.method.docblock) {
      return (<pre>{this.props.method.docblock}</pre>);
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-footer">
          <p className="h4 method--name">
            {this.props.method.name}  ( <span className="method--params-list">{this.paramsList()}</span> )
          </p>
          <p className="method--description">{this.props.method.description}</p>
          {this.getParams()}
          {this.getReturns()}
        </div>
      </div>
    );
  }
}

Method.propTypes = {
  method: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};
