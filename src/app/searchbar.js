import React, {Component} from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.updateFilterText(this.textInput.value);
  }

  render() {
    return (
      <form>
        <input
          placeholder="Filter jobs by keyword..."
          value={this.props.filterText}
          onChange={this.handleChange}
          ref={input => {
            this.textInput = input;
          }}
          className="searchbar"
          />
      </form>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: React.PropTypes.func.isRequired,
  filterText: React.PropTypes.string.isRequired
};
