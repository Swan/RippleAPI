const axios = require('axios');

// Howl.. what the hell is this? lol
module.exports.surprise = async () => {
    try {
        let url = `http://ripple.moe/api/v1/surprise_me`;
        const response = await axios.get(url);
        return response.data;       
    } catch (e) {
        throw new Error(e);
    } 
};