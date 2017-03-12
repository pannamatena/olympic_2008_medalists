import { expect } from 'chai';
import OlympicMedalDataAggregator from '../../../src/olympic-medal-data-aggregator/olympic-medal-data-aggregator';

describe('OlympicMedalDataAggregator', () => {

  describe('getMedalCountsByCountry', () => {
    describe('When the data given as a parameter is undefined', () => {
      let aggregator;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.getMedalCountsByCountry(undefined);
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is an empty array', () => {
      let aggregator;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
      });

      it('should return an empty array', () => {
        const result = aggregator.getMedalCountsByCountry([]);
        expect(result).to.deep.equal([]);
      });
    });
    describe('When the data given as a parameter is not an array', () => {
      let aggregator;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.getMedalCountsByCountry({notAn: 'array'});
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is an array not containing objects', () => {
      let aggregator;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.getMedalCountsByCountry([['notAnObject']]);
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is an array of objects, which do not contain the keys country and medal' , () => {
      let aggregator;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        testData = [
          {
            falseKey1: true,
            falseKey2: true
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.getMedalCountsByCountry(testData);
        }).to.throw('Invalid input data. Expects an array of objects containing keys country and medal.');
      });
    });
    describe('When the data given as a parameter is an array of objects, with keys country and medal', () => {
      let aggregator;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        testData = [
          {
            country: 'KEN',
            medal: 'Bronze'
          },
          {
            country: 'ETH',
            medal: 'Gold'
          },
          {
            country: 'ETH',
            medal: 'Silver'
          },
        ];
      });

      it('should return the aggregated results per country', () => {
        const result = aggregator.getMedalCountsByCountry(testData);
        expect(result).to.have.length(2);
      });
    });
  });

  describe('filterMedalCounts', () => {
    describe('When the data given as a parameter is undefined', () => {
      let aggregator;
      let filterTypes;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(undefined, filterTypes);
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is empty', () => {
      let aggregator;
      let filterTypes;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
      });

      it('should return an empty array', () => {
        const result = aggregator.filterMedalCounts([], filterTypes);
        expect(result).to.deep.equal([]);
      });
    });
    describe('When the data given as a parameter is not an array', () => {
      let aggregator;
      let filterTypes;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts({notAn: 'array'}, filterTypes);
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is an array not containing objects', () => {
      let aggregator;
      let filterTypes;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts([['notAnObject']], filterTypes);
        }).to.throw('Invalid input data. Expects an array of objects.');
      });
    });
    describe('When the data given as a parameter is an array of objects, which do not contain the keys country, gold, silver, bronze and total' , () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
        testData = [
          {
            falseKey1: true,
            falseKey2: true
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an array of objects containing keys country, gold, silver, bronze and total.');
      });
    });
    describe('When the data given as a parameter is an array of objects, which do not have string values for country and number values for gold, silver, bronze and total' , () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
        testData = [
          {
            bronze: 'notANumber',
            country: ['notString'],
            gold: {notA: 'number'},
            silver: NaN,
            total: NaN
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an array of objects containing string values for country and number values for gold, silver, bronze and total.');
      });
    });

    describe('When selectedFilterTypes is undefined', () => {
      let aggregator;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, undefined);
        }).to.throw('Invalid input data. Expects an object.');
      });
    });
    describe('When selectedFilterTypes is empty', () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {};
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an object.');
      });
    });
    describe('When selectedFilterTypes is not an object', () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = ['notAnObject'];
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an object.');
      });
    });
    describe('When selectedFilterTypes is an object and does not have keys gold, silver, bronze', () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          falseKey1: true,
          falseKey2: true
        };
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an object with keys gold, silver, bronze.');
      });
    });
    describe('When selectedFilterTypes is an object and has values other than a boolean', () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: 23,
          silver: 'notBoolean',
          bronze: {notA: 'boolean'}
        };
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should throw an error', () => {
        expect(() => {
          aggregator.filterMedalCounts(testData, filterTypes);
        }).to.throw('Invalid input data. Expects an object with boolean values.');
      });
    });

    describe('When the data given as a parameter is an array of objects, with keys country, gold, silver, bronze and total, and selectedFilterTypes is an object containing keys gold, silver, bronze', () => {
      let aggregator;
      let filterTypes;
      let testData;

      beforeEach(() => {
        aggregator = new OlympicMedalDataAggregator();
        filterTypes = {
          gold: true,
          silver: true,
          bronze: true
        };
        testData = [
          {
            bronze: 2,
            country: 'KEN',
            gold: 1,
            silver: 3,
            total: 6
          },
          {
            bronze: 1,
            country: 'ETH',
            gold: 4,
            silver: 3,
            total: 8
          },
          {
            bronze: 8,
            country: 'USA',
            gold: 23,
            silver: 12,
            total: 43
          }
        ];
      });

      it('should return the filtered results per country', () => {
        const result = aggregator.filterMedalCounts(testData, filterTypes);
        expect(result).to.have.length(3);
      });
    });

  });

});