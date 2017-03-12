import React, { Component } from 'react';

class OnOffSwitch extends Component {

  /**
   * Renders the component.
   */
  render() {
    return (
        <div className='onOffSwitch'>
          <span className='onOffSwitch-label'>{this.props.filterType}</span>
          <input
              type='checkbox'
              value={this.props.filterType}
              id={`checkbox_${this.props.filterType}`}
              checked={this.props.isChecked}
              onChange={() => this.props.onChange()} />
          <label htmlFor={`checkbox_${this.props.filterType}`}>&nbsp;</label>
        </div>
    );
  }
}

export default OnOffSwitch;
