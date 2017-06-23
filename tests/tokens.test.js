const expect = require('expect');
const tokens = require('../lib/tokens');

describe('cheesegull', () => {

    // Test for tokens.createToken(username, password, privileges, description).
    describe('#createToken', () => { 
        it('should get the information for a given beatmap from Ripple\'s API', (done) => {
            let tokenInfo = {
                username: '',
                password: '',
                privileges: 99999999,
                description: 'Test!'
            }
            tokens.createToken(tokenInfo.username, tokenInfo.password, tokenInfo.privileges, tokenInfo.description)
                .then((token) => {
                    console.log(token);
                    done();
                    expect(token)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });
});