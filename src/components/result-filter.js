import React, { Component } from 'react';
import OnOffSwitch from './on-off-switch';

class ResultFilter extends Component {

  /**
   * Gets the necessary number of switches to render.
   *
   * @param props - The properties available on this component
   * @return {Array} Switches to be rendered
   */
  getFilterSwitches (props) {
    return Object.keys(props.selectedFilterTypes).map((filterType) =>
        (
            <OnOffSwitch
                key={filterType}
                filterType={filterType}
                isChecked={props.selectedFilterTypes[filterType]}
                onChange={() => props.onChange(filterType)} />
        )
    );
  }

  /**
   * Renders the component.
   */
  render() {
    return (
        <div className='resultFilter panel'>
          <h2 className='resultFilter-label'>Filter results</h2>
          <div className='resultFilter-inputContainer'>
            {Object.keys(this.props.selectedFilterTypes).length && this.getFilterSwitches(this.props)}
          </div>
        </div>
    );
  }
}

export default ResultFilter;
