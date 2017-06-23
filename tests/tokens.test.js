const expect = require('expect');
const tokens = require('../lib/tokens');

describe('tokens', () => {

    // // Test for tokens.createToken(username, password, privileges, description).
    // describe('#createToken', () => { 
    //     it('should create and retrieve a new token from Ripple\'s API', (done) => {
    //         let tokenInfo = {
    //             username: '',
    //             password: '',
    //             privileges: 99999999,
    //             description: 'Test!'
    //         }
    //         tokens.createToken(tokenInfo.username, tokenInfo.password, tokenInfo.privileges, tokenInfo.description)
    //             .then((token) => {
    //                 console.log(token);
    //                 done();
    //                 expect(token)
    //                     .toExist()
    //                     .toBeA('object')                        
    //             })
    //     });
    // });

    // // Test for tokens.getTokens(token).
    // describe('#getTokens', () => { 
    //     it('should retrieve the list of API tokens Ripple\'s API', (done) => {
    //         let token = '';
    //         tokens.getTokens(token)
    //             .then((tokens) => {
    //                 console.log(tokens);
    //                 done();
    //                 expect(tokens)
    //                     .toExist()
    //                     .toBeA('object')                        
    //             })
    //     });
    // });

     // Test for tokens.getTokenInfo(token).
    describe('#getTokenInfo', () => { 
        it('should retrieve information about one token from Ripple\'s API', (done) => {
            let token = '';
            tokens.getTokenInfo(token)
                .then((token) => {
                    //console.log(token);
                    done();
                    expect(token)
                        .toExist()
                        .toBeA('object')                        
                })
        });
    });          
});