const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('ContainPrime',function(){
    describe('handle valid input', function(){
        it('should return plung if contains prime number for 28', function(){
            assert.equal(myApp.containPrime(28),"plong");
        });
        it('should return plang if contains prime number for 10', function(){
            assert.equal(myApp.containPrime(10),"plang");
        });
        it('should return pling if contains prime number for 12', function(){
            assert.equal(myApp.containPrime(12),"pling");
        });
        it('should return plingplang if contains prime number for 1755', function(){
            assert.equal(myApp.containPrime(1755), "plingplang");
        });
        it('should return plingplong if contains prime number for 21', function(){
            assert.equal(myApp.containPrime(21), "plingplong");
        });
        it('should return plangplong if contains prime number for 35', function(){
            assert.equal(myApp.containPrime(35), "plangplong");
        });
        it('should return plingplangplong if contains prime number for 105', function(){
            assert.equal(myApp.containPrime(105), "plingplangplong");
        });
        it('should return plung if does not contain prime number for 34', function(){
            assert.equal(myApp.containPrime(34), 34);
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