const axios = require('axios');

module.exports.isOnlineById = async (id) => {
    try {
        if (!id) throw new Error('An id must be provided.');
        if (typeof id != 'number') throw new Error('The id provided must be an integer.');

        let url = `http://ripple.moe/api/v1/isOnline?id=${id}`;
        const response = await axios.get(url);
        return response.data;       
    } catch (e) {
        throw new Error(e);
    } 
};


module.exports.isOnlineByName = async (username) => {
    try {
        if (!username) throw new Error('An username must be provided.');
        if (typeof username != 'string') throw new Error('The username provided must be a string.');

        let url = `http://ripple.moe/api/v1/isOnline?u=${username}`;
        const response = await axios.get(url);
        return response.data;       
    } catch (e) {
        throw new Error(e);
    } 
};

module.exports.getOnlineUsers = async () => {
    try {
        let url = `http://ripple.moe/api/v1/onlineUsers`;
        const response = await axios.get(url);
        return response.data;       
    } catch (e) {
        throw new Error(e);
    } 
};