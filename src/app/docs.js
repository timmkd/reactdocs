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
    this.filterText = this.filterText.bind(this);
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
          comp.show = 'true';
          comps.push(comp);
          return true;
        });
        comps.sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.setState({comps});
      });
  }

  hideComponent(index) {
    const comps = this.state.comps;
    comps[index].show = 'false';
    this.setState({comps});
  }

  showComponent(index) {
    const comps = this.state.comps;
    comps[index].show = 'true';
    this.setState({comps});
  }

  expandComponent(index) {
    const comps = this.state.comps;
    comps[index].expanded = 'false';
    this.setState({comps});
  }

  contractComponent(index) {
    const comps = this.state.comps;
    comps[index].expanded = 'true';
    this.setState({comps});
  }

  toggleComponent(index) {
    const comps = this.state.comps;
    comps[index].expanded = comps[index].expanded === 'true' ? 'false' : 'true';
    this.setState({comps});
  }

  updateFilterText(text) {
    this.state.comps.map(comp => {
      if (comp.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 && comp.hidden !== 'true') {
        comp.show = 'true';
      } else if (comp.show === 'true') {
        comp.show = 'false';
      }
      return true;
    });
  }

  filterText(text) {
    this.setState({filter: text});
    this.updateFilterText(text);
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
          updateFilterText={this.filterText}
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
