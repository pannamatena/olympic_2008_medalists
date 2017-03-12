import React, { Component } from 'react';
import olympicsMedalData from '../data/test-data.json';
import OlympicMedalDataAggregator from '../olympic-medal-data-aggregator/olympic-medal-data-aggregator';
import ResultTable from './result-table';
import ResultFilter from './result-filter';

class App extends Component {

  /**
   * Instantiates the application.
   */
  constructor () {
    super();

    this.state = {
      selectedFilterTypes: {
        gold: true,
        silver: true,
        bronze: true
      }
    };

    this.dataAggregator = new OlympicMedalDataAggregator();
    this.aggregatedData = this.dataAggregator.getAggregatedData(olympicsMedalData);
  }

  /**
   * Toggles the boolean value of the selected filter types.
   *
   * @param type
   * @private
   */
  toggleSelectedFilterTypes (type) {
    const newState = this.state;
    newState.selectedFilterTypes[type] = !newState.selectedFilterTypes[type];
    this.setState(newState);
  }

  /**
   * Renders the component.
   */
  render() {

    const resultTableDisplayData = this.dataAggregator.getFilteredResultTableData(this.aggregatedData, this.state.selectedFilterTypes);

    return (
      <div className='content-aligner'>
        <h1>Olympics 2008 Medalists</h1>

        <ResultFilter
            selectedFilterTypes={this.state.selectedFilterTypes}
            onChange={type => this.toggleSelectedFilterTypes(type)} />

        <ResultTable
            resultData={resultTableDisplayData} />
      </div>
    );
  }
}

export default App;
