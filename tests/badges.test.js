const expect = require('expect');
const badges = require('../lib/badges');

describe('badges', () => {

    // Test for getBadges()
    describe('#getLeaderboard', () => { 
        it('should retrieve the list of badges from Ripple\'s API', (done) => {
            badges.getBadges()
                .then((badges) => {
                    //console.log(badges);
                    done();
                    expect(badges)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });
});