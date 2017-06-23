const axios = require('axios');

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