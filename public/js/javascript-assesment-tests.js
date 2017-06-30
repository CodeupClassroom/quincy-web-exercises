describe('isNegative', function() {
  it('should be a defined function', function() {
    expect(typeof isNegative).toBe('function');
  });
  it('should return a boolean value', function() {
    expect(typeof isNegative(-12)).toBe('boolean');
    expect(typeof isNegative(12)).toBe('boolean');
  });
  it('return false for 0', function() {
    expect(isNegative(0)).toBe(false);
  });
  it('returns true for -1', function() {
    expect(isNegative(-1)).toBe(true);
  });
  it('returns false for 6', function() {
    expect(isNegative(6)).toBe(false);
  });
  it('returns false for 123.456', function() {
    expect(isNegative(123.456).toBe(false));
  });
});

describe('average', function() {
  it('should be a defined function', function() {
    expect(typeof average).toBe('function');
  });
  it('should return a number', function() {
    expect(typeof average([1, 2, 3])).toBe('number');
    expect(typeof average([4, 5, 6])).toBe('number');
  });
  it('the average of [1, 2, 3] is 2', function() {
    expect(average([1, 2, 3])).toBe(2);
  });
  it('the average of [4, 6, 8] is 6', function() {
    expect(average([4, 6, 8])).toBe(6);
  });
});

describe('countOdds', function() {
  it('should be a defined function', function() {
    expect(typeof countOdds).toBe('function');
  });
  it('should return a number', function() {
    expect(typeof countOdds([1, 2, 3])).toBe('number');
    expect(typeof countOdds([])).toBe('number');
    expect(typeof countOdds([1, 2, 3, 4, 5, 6, 7, 8])).toBe('number');
  });
  it('counts 2 odds in [1, 2, 3]', function() {
    expect(countOdds([1, 2, 3])).toBe(2);
  });
  it('counts 3 odds in [1, 1, 4, 6, 5]', function() {
    expect(countOdds([1, 1, 4, 6, 5])).toBe(3);
  });
});

describe('convertNameToObject', function() {
  it('should be a defined function', function() {
    expect(typeof convertNameToObject).toBe('function');
  });
  it('should return an object with firstName and lastName properties', function() {
    expect(convertNameToObject('Harry Potter').firstName).toBeDefined();
    expect(convertNameToObject('Harry Potter').lastName).toBeDefined();
  });
  it('the firstName and lastName properties should be strings', function() {
    expect(typeof convertNameToObject('Harry Potter').firstName).toBe('string');
    expect(typeof convertNameToObject('Harry Potter').lastName).toBe('string');
  });
  it('converts "Harry Potter" to {firstName: "Harry", lastName: "Potter"}', function() {
    expect(convertNameToObject('Harry Potter')).toEqual({firstName: 'Harry', lastName: 'Potter'});
  });
  it('converts "Ron Weasley" to {firstName: "Ron", lastName: "Weasley"}', function() {
    expect(convertNameToObject('Ron Weasley')).toEqual({firstName: 'Ron', lastName: 'Weasley'});
  });
});

describe('fiveTo', function() {
  it('should be a defined function', function() {
    expect(typeof fiveTo).toBe('function');
  });
  it('should return an array', function() {
    expect(Array.isArray(fiveTo(8))).toBe(true);
    expect(Array.isArray(fiveTo(5))).toBe(true);
  });
  it('returns [5] when passed a number <= 6', function() {
    expect(fiveTo(5)).toEqual([5]);
    expect(fiveTo(6)).toEqual([5]);
    expect(fiveTo(1)).toEqual([5]);
  });
  it('returns an array of the numbers 5 - 9 when passed 10', function() {
    expect(fiveTo(10)).toEqual([5, 6, 7, 8, 9]);
  });
});

describe('upperCaseLastNames', function() {
  it('should be a defined function', function() {
    expect(typeof upperCaseLastNames).toBe('function');
  });
  it('upper cases the lastName property of all the objects in the passed array', function() {
    const names = [
      {firstName: 'Harry', lastName: 'Potter'},
      {firstName: 'Ron', lastName: 'weasley'},
      {firstName: 'Hermione', lastName: 'granger'}
    ];
    expect(upperCaseLastNames(names)).toEqual([
     {firstName: 'Harry', lastName: 'Potter'},
     {firstName: 'Ron', lastName: 'Weasley'},
     {firstName: 'Hermione', lastName: 'Granger'}
   ]);
  });
});
