import React, {Component} from 'react';
import {Comp} from './comp';

export class Comps extends Component {
  render() {
    return (
      <ul className="list-unstyled comps">
        {this.props.comps.map((comp, i) => (<Comp key={i} comp={comp}/>))}
      </ul>
    );
  }
}

Comps.propTypes = {
  comps: React.PropTypes.array.isRequired
};
