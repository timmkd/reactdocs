import React, {Component} from 'react';

import {Param} from './param';

export class Method extends Component {

  constructor(props) {
    super(props);
    this.getParams = this.getParams.bind(this);
    this.paramsList = this.paramsList.bind(this);
  }

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

  render() {
    return (
      <div>
        <p className="method">
          {this.props.method.name}( <span className="method--params">{this.paramsList()}</span> )
        </p>
        {/* <h5>Params</h5>
        {this.getParams()}
        <dl className="dl-props">
          <dt>Returns</dt>
          <dd>{this.props.method.returns ? this.props.method.returns.toString() : 'null'}</dd>
        </dl> */}
      </div>
    );
  }
}

Method.propTypes = {
  method: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};
