class OlympicMedalDataAggregator {

  /**
   * Gets the default aggregated data for display.
   *
   * @param data - array of objects containing the data by olympic athletes
   * @return {{country: string, gold: number, silver: number, bronze: number, total: number}[]} The unfiltered, sorted data to be displayed
   */
  getAggregatedData (data) {
    this.validateIncomingDataByType(data);
    this.validateIncomingDataItemByType(data);
    this.validateDataItemByKeysForAggregation(data);

    const countryLookup = this.createCountryLookup(data);
    const resultTableReadableData = this.createResultTableReadableData(countryLookup);
    return this.sortResultTableData(resultTableReadableData);
  }

  /**
   * Creates a lookup from the data by athletes
   *
   * @param data - array of objects containing the data by olympic athletes
   * @return {{country: {Gold: number, Silver: number, Bronze: number}}} The lookup containing medal data by country
   * @private
   */
  createCountryLookup (data) {
    return data.reduce((countryLookup, athleteData) => {
      if (countryLookup[athleteData.country]) {
        countryLookup[athleteData.country][athleteData.medal]++;
      } else {
        countryLookup[athleteData.country] = {
          Gold: 0,
          Silver: 0,
          Bronze: 0
        };
        countryLookup[athleteData.country][athleteData.medal] = 1;
      }

      return countryLookup;
    },{});
  }

  /**
   * Turns the lookup into an array of objects, readable for the result table.
   *
   * @param lookup - an object containing medal data by country
   * @return {{country: string, gold: number, silver: number, bronze: number, total: number}[]} An array of objects containing medal data by country
   * @private
   */
  createResultTableReadableData (lookup) {
    return Object.keys(lookup).map(country => {
      return {
        country: country,
        gold: lookup[country].Gold,
        silver: lookup[country].Silver,
        bronze: lookup[country].Bronze,
        total: lookup[country].Gold + lookup[country].Silver + lookup[country].Bronze
      };
    });
  }

  /**
   * Sorts medal data first by total medals, then by number of golds, silvers, bronzes and finally by alphabetical order.
   *
   * @param resultTableData - Array of objects to be displayed in the result table.
   * @return {{country: string, gold: number, silver: number, bronze: number, total: number}[]} Sorted array of objects of medal data by country
   * @private
   */
  sortResultTableData (resultTableData) {
    return resultTableData.sort((firstCountry, secondCountry) => {
      if (secondCountry.total !== firstCountry.total) {
        return secondCountry.total - firstCountry.total;
      }

      if (secondCountry.gold !== firstCountry.gold) {
        return secondCountry.gold - firstCountry.gold;
      }

      if (secondCountry.silver !== firstCountry.silver) {
        return secondCountry.silver - firstCountry.silver;
      }

      if (secondCountry.bronze !== firstCountry.bronze) {
        return secondCountry.bronze - firstCountry.bronze;
      }

      return secondCountry.country > firstCountry.country ? -1 : 1;

    });
  }

  /**
   * Filters the sorted result table data based on the selected filter types.
   *
   * @param aggregatedTableData - The sorted array of objects containing medal data for the result table
   * @param selectedFilterTypes - An object containing the active and inactive filter types
   * @return {{country: string, gold: number, silver: number, bronze: number, total: number}[]} Filtered array of objects of medal data by country
   */
  getFilteredResultTableData (aggregatedTableData, selectedFilterTypes) {

    this.validateIncomingDataByType(aggregatedTableData);
    this.validateIncomingDataItemByType(aggregatedTableData);
    this.validateDataItemByKeysForFilter(aggregatedTableData);
    this.validateDataItemByValuesForFilter(aggregatedTableData);

    this.validateFilterTypes(selectedFilterTypes);
    this.validateFilterTypesByKeys(selectedFilterTypes);
    this.validateFilterTypesByValues(selectedFilterTypes);

    return aggregatedTableData.filter((country) => {
      return (selectedFilterTypes.gold && country.gold) || (selectedFilterTypes.silver && country.silver) || (selectedFilterTypes.bronze && country.bronze);
    });
  }

  /**
   * Validates the data given as parameter.
   *
   * @param data - Array of objects containing medal data
   * @private
   */
  validateIncomingDataByType (data) {
    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid input data. Expects an array of objects.');
    }
  }

  /**
   * Validates items in the data given as a parameter by type.
   *
   * @param data - Array of objects containing medal data
   * @private
   */
  validateIncomingDataItemByType (data) {
    data.forEach(dataObject => {
      if (dataObject.constructor !== Object) {
        throw new Error('Invalid input data. Expects an array of objects.');
      }
    });
  }

  /**
   * Validates the items in the data given as a parameter for aggregation by keys.
   *
   * @param data - Array of objects containing medal data
   * @private
   */
  validateDataItemByKeysForAggregation (data) {
    data.forEach(dataObject => {
      if (!dataObject.country || !dataObject.medal) {
        throw new Error('Invalid input data. Expects an array of objects containing keys country and medal.');
      }
    });
  }

  /**
   * Validates the items in the data given as a parameter for filtering by keys.
   *
   * @param data - Array of objects containing medal data
   * @private
   */
  validateDataItemByKeysForFilter (data) {
    data.forEach(dataObject => {
      if (typeof dataObject.country === 'undefined' || typeof dataObject.gold === 'undefined' || typeof dataObject.silver === 'undefined' || typeof dataObject.bronze === 'undefined' || typeof dataObject.total === 'undefined') {
        throw new Error('Invalid input data. Expects an array of objects containing keys country, gold, silver, bronze and total.');
      }
    });
  }

  /**
   * Validates the items in the data given as a parameter for filtering by values.
   *
   * @param data - Array of objects containing medal data
   * @private
   */
  validateDataItemByValuesForFilter (data) {
    data.forEach(dataObject => {
      if (typeof dataObject.country !== 'string' || typeof dataObject.gold !== 'number' || typeof dataObject.silver !== 'number' || typeof dataObject.bronze !== 'number' || typeof dataObject.total !== 'number') {
        throw new Error('Invalid input data. Expects an array of objects containing string values for country and number values for gold, silver, bronze and total.');
      }
    });
  }

  /**
   * Validates the type of the filter types object.
   *
   * @param types - Object containing the active and inactive filter types
   * @private
   */
  validateFilterTypes (types) {
    if (!types || Object.keys(types).length === 0 || (types.constructor !== Object)) {
      throw new Error('Invalid input data. Expects an object.');
    }
  }

  /**
   * Validates the keys of the filter types object.
   *
   * @param data - Object containing the active and inactive filter types
   * @private
   */
  validateFilterTypesByKeys (data) {
    if (!data.gold || !data.silver || !data.bronze) {
      throw new Error('Invalid input data. Expects an object width keys gold, silver, bronze.');
    }
  }

  /**
   * Validates the values of the filter types object.
   *
   * @param data - Object containing the active and inactive filter types
   */
  validateFilterTypesByValues (data) {
    if (typeof data.gold !== 'boolean' || typeof data.silver !== 'boolean' || typeof data.bronze !== 'boolean') {
      throw new Error('Invalid input data. Expects an object width boolean values.');
    }
  }

}

export default OlympicMedalDataAggregator;