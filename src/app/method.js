import React, {Component} from 'react';

import {Param} from './param';

export class Method extends Component {

  getParams() {
    if (this.props.method.params) {
      return (
        <ul>
          {Object.keys(this.props.method.params).map(key => (
            <Param param={this.props.method.params[key]} name={key} key={key}/>
          ))}
        </ul>
      );
    }
  }

  paramsList() {
    if (this.props.method.params) {
      return (
        <span>
          {Object.keys(this.props.method.params).map(key => (
            {key}
          ))}
        </span>
      );
    }
  }

  render() {
    return (
      <div>
        <h4>{this.props.method.name}()</h4>
        <h5>Params</h5>
        {this.getParams()}
        <dl className="dl-props">
          <dt>Returns</dt>
          <dd>{this.props.method.returns ? this.props.method.returns.toString() : 'null'}</dd>
        </dl>
      </div>
    );
  }
}

Method.propTypes = {
  method: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};
