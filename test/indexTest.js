const expect = chai.expect;

describe('index.js', function () {
  describe('returnFirstTwoDrivers()', function () {
    it('should return an array of the first two drivers', function () {
      expect(returnFirstTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Sally', 'Bob']);
    });

    it('should be set to a constant', function () {
      expect(function () { returnFirstTwoDrivers = function () { return 'new function'}} ).to.throw(TypeError);
    });
  });

  describe('`returnLastTwoDrivers` function', function () {
    it('should return an array of the last two drivers', function () {
      expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
    });

    it('should be set to a constant', function () {
      expect(function () { returnLastTwoDrivers = function () { return 'new function'; } }).to.throw(TypeError);
    });
  });

  describe('selectingDrivers', function () {
    it('is an array (so it naturally responds to the `slice` method)', function () {
      expect(selectingDrivers.slice).to.equal(Array.prototype.slice);
    });

    it('has the `returnFirstTwoDrivers` function to as its first element', function () {
      expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', function () {
      expect(selectingDrivers[selectingDrivers.length-1]).to.eql(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', function () {
      let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

      expect(selectingDrivers[0](drivers)).to.eql(['Sally', 'Bob']);

      expect(selectingDrivers[1](drivers)).to.eql(['Freddy', 'Claudia']);
    });
  });

  describe('`createFareMultiplier` function', function () {
    it('should return a function', function () {
      const doubler = createFareMultiplier(2);

      expect(doubler).to.be.a('function');
    });

    it('should multiply a given value using the created multiplier', function () {
      const fareDoubler = createFareMultiplier(2);

      expect(fareDoubler(5)).to.equal(10);
    });
  });

  describe('FareMultiplier functions created with `createFareMultiplier`', function () {
    it('should have a doubler function', function () {
      expect(fareDoubler).to.be.a('function');

      expect(fareDoubler(5)).to.equal(10);
    });

    it('should have a tripler function', function () {
      expect(fareTripler).to.be.a('function');

      expect(fareTripler(5)).to.equal(15);
    });
  });

  describe('`selectDifferentDrivers(drivers, whichDrivers)` function', function () {
    it('returns the first two drivers when passed through the `returnFirstTwoDrivers` as the second argument', function () {
      let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
    });

    it('returns the last two drivers when passed through the `returnLastTwoDrivers` as the second argument', function () {
      let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
    });
  });
});
