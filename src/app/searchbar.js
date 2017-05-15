import React, {Component} from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {filterText: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // this.setState({filterText: this.textInput.value});
    this.props.updateFilterText(this.textInput.value);
  }

  render() {
    return (
      <form className="searchbar-wrapper input-group input-group-lg">
        <span className="input-group-addon" id="sizing-addon1"><span className="glyphicon glyphicon-search" aria-hidden="true"/></span>
        <input
          className="searchbar form-control"
          placeholder="Filter jobs by keyword..."
          // value={this.state.filterText}
          onChange={this.handleChange}
          ref={input => {
            this.textInput = input;
          }}
          />
      </form>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: React.PropTypes.func.isRequired
};
