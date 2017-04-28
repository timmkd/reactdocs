import React, {Component} from 'react';
import {Comps} from './comps';
import axios from 'axios';

export class Docs extends Component {
  constructor() {
    super();
    this.state = {comps: []};
  }

  componentDidMount() {
    axios
      .get('app/docs.json')
      .then(response => {
        const comps = [];

        Object.keys(response.data).map(i => {
          const comp = response.data[i];
          comp.key = i;
          comps.push(comp);
          return true;
        });
        this.setState({comps});
      });
  }

  render() {
    return (
      <div className="container">
        <h1>
          Documentation
        </h1>
        <Comps comps={this.state.comps}/>
      </div>
    );
  }
}

Docs.propTypes = {
  docs: React.PropTypes.array
};
