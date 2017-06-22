const expect = require('expect');
const cheesegull = require('../lib/cheesegull');

describe('cheesegull', () => {

    // Test for cheesegull.getBeatmapInfo(beatmapId).
    describe('#getBeatmapInfo', () => { 
        it('should get the information for a given beatmap from Ripple\'s API', (done) => {
            cheesegull.getBeatmapInfo(1243115)
                .then((beatmap) => {
                    done();
                    expect(beatmap)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for cheesegull.getBeatmapSetInfo(beatmapSetId).
    describe('#getBeatmapSetInfo', () => { 
        it('should get the information for a given beatmap set from Ripple\'s API', (done) => {
            cheesegull.getBeatmapSetInfo(320118)
                .then((beatmap) => {
                    done();
                    expect(beatmap)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });    

});