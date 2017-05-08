import React, {Component} from 'react';
import {Comp} from './comp';

export class Comps extends Component {

  render() {
    return (
      <ul className="list-unstyled comps">
        {this.props.comps.map((comp, i) => (
          <Comp
            key={i}
            id={i}
            comp={comp}
            expanded={comp.expanded}
            toggleComponent={this.props.toggleComponent}
            />
          ))}
      </ul>
    );
  }
}

Comps.propTypes = {
  comps: React.PropTypes.array.isRequired,
  toggleComponent: React.PropTypes.func.isRequired
};
