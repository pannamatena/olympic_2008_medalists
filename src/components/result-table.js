import React, { Component } from 'react';

class ResultTable extends Component {

  /**
   * Gets the necessary number of table rows to render.
   *
   * @param resultData - The data to be rendered into the result table
   * @return {*} The table rows to be rendered
   */
  getTableRows (resultData) {
    return resultData.map((dataItem) =>
        (
        <div className='resultTable-row panel' key={dataItem.country}>
          <div className='resultTable-row-countryName'>{dataItem.country}</div>
          <div className='resultTable-row-gold'>{dataItem.gold}</div>
          <div className='resultTable-row-silver'>{dataItem.silver}</div>
          <div className='resultTable-row-bronze'>{dataItem.bronze}</div>
          <div className='resultTable-row-total'>{dataItem.total}</div>
        </div>
        )
    );
  }

  /**
   * Renders the component.
   */
  render() {
    return (
        <div className='resultTable'>
          <div className='resultTable-header panel'>
            <div className='resultTable-header-countryName'>Country</div>
            <div className='resultTable-header-gold'>&nbsp;</div>
            <div className='resultTable-header-silver'>&nbsp;</div>
            <div className='resultTable-header-bronze'>&nbsp;</div>
            <div className='resultTable-header-total'>&nbsp;</div>
          </div>
          {this.getTableRows(this.props.resultData)}
        </div>
    );
  }
}

export default ResultTable;
