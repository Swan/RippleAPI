const expect = require('expect');
const cheesegull = require('../lib/cheesegull');

describe('cheesegull', () => {

    // Test for cheesegull.getBeatmapInfo(beatmapId).
    describe('#getBeatmapInfo', () => { 
        it('should get the information for a given beatmap from Ripple\'s API', (done) => {
            cheesegull.getBeatmapInfo(1243115)
                .then((beatmap) => {
                    // console.log(beatmap);
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
                .then((beatmapSet) => {
                    // console.log(beatmapSet);
                    done();
                    expect(beatmapSet)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });

    // Test for cheesegull.searchBeatmaps(searchQuery, gameMode, []rankedStatuses, amount, offset)
    describe('#searchBeatmaps', () => { 
        it('should retrieve a list of beatmaps with a given query from Ripple\'s API', (done) => {
            cheesegull.searchBeatmaps('arpia97', 'mania', ['loved', 'unranked', 'ranked'], 2, 3)
                .then((beatmaps) => {
                    done();
                    // console.log(beatmaps);
                    expect(beatmaps)
                        .toExist()
                        .toBeAn('object');
                });
        });
    });        

});