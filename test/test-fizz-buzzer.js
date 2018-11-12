const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should check whether the number is divisible by 15 or 3 or 5', function() {
        const normalCases = [
            {num: 6, expected:'fizz'},
            {num: 25, expected: 'buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num:2, expected: 2}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
          });
    });
    
    it('should raise error if args not numbers', function() {
        const badInputs = ['a', true, '9']; 
        
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});