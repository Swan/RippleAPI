const axios = require('axios');
const { setMode } = require('../utils/setmode');

module.exports.getLeaderboard = async(mode, page) => {
    try {
        let url = `https://ripple.moe/api/v1/leaderboard?page=${page}`;
        url = setMode(mode, url);
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};