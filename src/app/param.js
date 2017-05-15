import React, {Component} from 'react';

export class Param extends Component {

  render() {
    return (
      <li>
        {this.props.param.name} {this.props.param.type}
      </li>
    );
  }
}

Param.propTypes = {
  param: React.PropTypes.object.isRequired
};
