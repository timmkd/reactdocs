import React, {Component} from 'react';

export class Prop extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <dl className="dl-props">
          <dt>Type</dt>
          <dd>{this.props.prop.type.name}</dd>

          <dt>Required</dt>
          <dd>{this.props.prop.required.toString()}</dd>

          <dt>Description</dt>
          <dd>{this.props.prop.description}</dd>
        </dl>
      </div>
    );
  }
}

Prop.propTypes = {
  prop: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};
