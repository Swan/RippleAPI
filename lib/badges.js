const axios = require('axios');

module.exports.getBadges = async() => {
    try {
        let url = `http://ripple.moe/api/v1/badges`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};