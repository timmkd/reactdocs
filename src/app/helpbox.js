import React, {Component} from 'react';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/github-gist.css';

export class HelpBox extends Component {

  render() {
    return (
      <div className="helpbox modal">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.props.hideOverlay}><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Help</h4>
          </div>
          <div className="modal-body">
            <div>
              <p>This is an automatically generated documentation based on the components of the Agent3 Front End Platform</p>
              <p>Documentation is generated by <a href="https://github.com/reactjs/react-docgen">react-docgen</a> with docblock syntax. Comments should be written in the following syntax.</p>
            </div>
            <Highlight className='javascript' language='javascript'>
              {`/**
 * General component description.
 */
var Component = React.createClass({

  propTypes: {
    /** Description of prop "foo". */
    foo: React.PropTypes.number,
    /** Description of prop "bar"  */
    bar: React.PropTypes.number.required
  }

  /**
   * This is the description for a component method, above the function.
   *
   * @param {object} param1 This is description for the param called param1
   * @param {number} param2 This is description for the param called param2
   * @param {array} param3 This is a param with a description too long to fit in
   *     one line. It is an array.
   * @param {object} param4 This is the description for the another param
   * @return {bool} This is a description of what the function will return and it
   *     returns a boolean
   */
  onClick(param1, param2, param3, param4) {

    //...

    return value;
  }
}
                `}
            </Highlight>
          </div>
        </div>
      </div>
    );
  }
}

HelpBox.propTypes = {
  docs: React.PropTypes.func
};