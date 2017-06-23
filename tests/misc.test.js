const expect = require('expect');
const misc = require('../lib/misc');

describe('cheesegull', () => {

    // Test for misc.surprise()
    describe('#surprise', () => { 
        it('should... return some cats....? (=^‥^=) from Ripple\'s API', (done) => {
            misc.surprise()
                .then((cats) => {
                    //console.log(cats);
                    done();
                    expect(cats)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

     // Test for misc.ping()
    describe('#ping', () => { 
        it('should get confirmation that the Ripple API is alive, and to also check token.', (done) => {
            misc.ping()
                .then((res) => {
                    //console.log(res);
                    done();
                    expect(res)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

});