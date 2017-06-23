const axios = require('axios');
const validator = require('validator');

module.exports.createToken = async (username, password, privileges, description) => {
    try {
        if (!username || typeof username != 'string') throw new Error('The username defined must be a string.');
        if (!password || typeof password != 'string') throw new Error('The password defined must be a string.');

        const response = await axios.post('https://ripple.moe/api/v1/tokens', {username, password, privileges, description});
        return response.data;
    } catch (e) {
        throw new Error(e);
    }

};

module.exports.getTokens = async (token) => {
    try {
        if (!token || !validator.isMD5(token)) throw new Error('The token provided must be a valid MD5 hash. Try running createToken() to obtain one');
        let instance = axios.create({
            baseURL: 'https://ripple.moe/api/',
            timeout: 10000,
            headers: {'X-Ripple-Token': token}
        });

        const response = await instance.get('https://ripple.moe/api/v1/tokens');
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};
