// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false if the gamertag length is >= 8', () => {
        const result = isValid('gamerta');
        expect(result).toBeFalsy();
    });
});

describe('validations tests suites - isValid', () => {
    test('should return false if the gamertag does not contain a special character', () => {
        const result = isValid('gamertag');
        expect(result).toBeFalsy();
    });
});

describe('validations tests suites - isValid', () => {
    test('should return false if the gamertag does not contain a number', () => {
        const result = isValid('gamertag$');
        expect(result).toBeFalsy();
    });
});

describe('validations tests suites - isValid', () => {
    test('should return true with a good gamertag', () => {
        const result = isValid('gamertag$1');
        expect(result).toBeTruthy();
    });
});
