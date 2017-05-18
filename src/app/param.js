import React, {Component} from 'react';

export class Param extends Component {

  getType() {
    if (this.props.param.type) {
      return (<span className="param--type"> {this.props.param.type.name}</span>);
    }
  }

  getDescription() {
    if (this.props.param.description) {
      return (<p className="param--description">{this.props.param.description}</p>);
    }
  }

  render() {
    return (
      <li className="param">
        <p className="param--name">{this.props.param.name} {this.getType()}</p>
        {this.getDescription()}
      </li>
    );
  }
}

Param.propTypes = {
  param: React.PropTypes.object.isRequired
};
