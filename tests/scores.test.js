const expect = require('expect');
const scores = require('../lib/scores');

describe('scores', () => {

    // Test for scores.getBeatmapScores(beatmap, mode).
    describe('#getBeatmapScores', () => { 
        it('should return a beatmap\'s scores from the Ripple API', (done) => {
            scores.getBeatmapScores('d39b0fc677236c28b6105476752fbb67', 'mania')
                .then((scores) => {
                    //console.log(scores);
                    done();
                    expect(scores)
                        .toNotBe(null)
                        .toNotBe(undefined)
                        .toExist()
                        .toBeA('object')
                });
        });
    });

});