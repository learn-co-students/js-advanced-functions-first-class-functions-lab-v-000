const expect = chai.expect;

describe('index.js', function () {
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Sally', 'Bob', 'Freddy', 'Claudia']);
  });

  describe('returnFirstTwoDrivers()', function () {
    it('should return a new array containing the first two drivers from the passed-in array', function () {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Sally', 'Bob']);
    });

 
  });

})