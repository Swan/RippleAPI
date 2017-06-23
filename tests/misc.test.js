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
     
});