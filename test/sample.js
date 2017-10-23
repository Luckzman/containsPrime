const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('ContainPrime',function(){
    describe('handle valid input', function(){
        it('should return plung if contains prime number for 28', function(){
            assert.equal(myApp.containPrime(28),"plung");
        });
        it('should return plingplang if contains prime number for 1755', function(){
            assert.equal(myApp.containPrime(1755), "plingplang");
        });
        it('should return plingplangplong if contains prime number for 105', function(){
            assert.equal(myApp.containPrime(105), "plingplangplong");
        });
        it('should return plung if does not contain prime number for 34', function(){
            assert.equal(myApp.containPrime(34), "34");
        });
    });
    describe('handle invalid input', function(){
        it('should return undefined as ContainsPrimeNumber for -5', function(){
            assert.equal(myApp.containPrime(-5), 'undefined');
        });
        it('should return undefined as ContainsPrimeNumber for ""', function(){
            assert.equal(myApp.containPrime(""), 'undefined');
        });
    });
});