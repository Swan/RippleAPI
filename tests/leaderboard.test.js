const expect = require('expect');
const leaderboard = require('../lib/leaderboard');

describe('leaderboard', () => {

    // Test for getLeaderboard()
    describe('#getLeaderboard', () => { 
        it('should retrieve the leaderboards from Ripple\'s API', (done) => {
            leaderboard.getLeaderboard('ctb', 1)
                .then((leaderboard) => {
                    //console.log(leaderboard);
                    done();
                    expect(leaderboard)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });
});