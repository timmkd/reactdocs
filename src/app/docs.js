import React, {Component} from 'react';
import {Comps} from './comps';
import {SearchBar} from './searchbar';

import axios from 'axios';

export class Docs extends Component {
  constructor() {
    super();
    this.state = {
      comps: [],
      filter: ''
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.showComponent = this.showComponent.bind(this);
    this.toggleComponent = this.toggleComponent.bind(this);
    this.updateFilterText = this.updateFilterText.bind(this);
  }

  componentDidMount() {
    axios
      .get('app/docs.json')
      .then(response => {
        const comps = [];

        Object.keys(response.data).map(i => {
          const comp = response.data[i];
          comp.key = i;
          comp.expanded = 'false';
          comps.push(comp);
          return true;
        });
        this.setState({comps});
      });
  }

  hideComponent(index) {
    const comps = this.state.comps;
    comps[index].expanded = 'false';
    this.setState({comps});
  }

  showComponent(index) {
    const comps = this.state.comps;
    comps[index].expanded = 'true';
    this.setState({comps});
  }

  toggleComponent(index) {
    const comps = this.state.comps;
    console.log(comps[index].expanded === true);
    comps[index].expanded = comps[index].expanded === 'true' ? 'false' : 'true';
    this.setState({comps});
    console.log(index);
    console.log(this.state.comps[index]);
  }

  updateFilterText(text) {
    const rows = [];

    this.setState({filter: text});

    this.state.comps.map(comp => {
      comp.expanded = 'false';
      if (comp.name.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        console.log('match');
        comp.expanded = 'true';
      }
      rows.push(comp);
      return true;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>
          Documentation
        </h1>
        <SearchBar
          comps={this.state.comps}
          filterText={this.state.filter}
          updateFilterText={this.updateFilterText}
          />
        <Comps
          comps={this.state.comps}
          hideComponent={this.hideComponent}
          showComponent={this.showComponent}
          toggleComponent={this.toggleComponent}
          />
      </div>
    );
  }
}

Docs.propTypes = {
  docs: React.PropTypes.array
};
