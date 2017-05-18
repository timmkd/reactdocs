import React, {Component} from 'react';

export class Prop extends Component {

  constructor(props) {
    super(props);
    this.getDescription = this.getDescription.bind(this);
    this.getRequired = this.getRequired.bind(this);
  }

  getDescription() {
    if (this.props.prop.description) {
      return (<p className="prop--description">{this.props.prop.description}</p>);
    }
  }

  getRequired() {
    if (this.props.prop.required) {
      return (<span className="prop--required"> required</span>);
    }
  }

  render() {
    return (
      <div>
        <p>
          <span className="prop--name">{this.props.name}</span>
          <span className="prop--type"> {this.props.prop.type.name}</span>
          {this.getRequired()}
        </p>
        {this.getDescription()}
      </div>
    );
  }
}

Prop.propTypes = {
  prop: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
};
