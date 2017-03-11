import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="content-aligner">
        <h1>Olympics 2008 Medalists</h1>

        <div className="resultFilter panel">
          <h2 className="resultFilter-label">Filter results</h2>
          <div className="resultFilter-inputContainer">
            <div className="onOffSwitch">
              <span className="onOffSwitch-label">Gold</span>
              <input type="checkbox" value="1" id="checkbox_gold" defaultChecked="checked" name="" />
              <label htmlFor="checkbox_gold">&nbsp;</label>
            </div>
            <div className="onOffSwitch">
              <span className="onOffSwitch-label">Silver</span>
              <input type="checkbox" value="2" id="checkbox_silver" defaultChecked="checked" name="" />
              <label htmlFor="checkbox_silver">&nbsp;</label>
            </div>
            <div className="onOffSwitch">
              <span className="onOffSwitch-label">Bronze</span>
              <input type="checkbox" value="3" id="checkbox_bronze" defaultChecked="checked" name="" />
              <label htmlFor="checkbox_bronze">&nbsp;</label>
            </div>
          </div>
        </div>

        <div className="resultTable">
          <div className="resultTable-header panel">
            <div className="resultTable-header-countryName">Country</div>
            <div className="resultTable-header-gold">&nbsp;</div>
            <div className="resultTable-header-silver">&nbsp;</div>
            <div className="resultTable-header-bronze">&nbsp;</div>
            <div className="resultTable-header-total">&nbsp;</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country Sample Country Sample Country Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
          <div className="resultTable-row panel">
            <div className="resultTable-row-countryName">Sample Country</div>
            <div className="resultTable-row-gold">23</div>
            <div className="resultTable-row-silver">44</div>
            <div className="resultTable-row-bronze">43</div>
            <div className="resultTable-row-total">232</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
