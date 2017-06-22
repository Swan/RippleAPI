const axios = require('axios');
const validator = require('validator');
const { setMode } = require('../utils/setmode');

module.exports.getBeatmapScores = async (beatmap, mode) => {
    try {
        let url;
        if (typeof beatmap == 'number') {
            url = `https://ripple.moe/api/v1/scores?b=${beatmap}`;
        } else if (validator.isMD5(beatmap)) {
            url = `https://ripple.moe/api/v1/scores?md5=${beatmap}`;
        } else {
            throw new Error('beatmap must be an integer or a valid md5 string');
        }
        url = setMode(mode, url);
        
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUserBest = async (user, mode) => {
    try {
        let url = (typeof user == 'number') ? `https://ripple.moe/api/v1/users/scores/best?id=${user}` : `https://ripple.moe/api/v1/users/scores/best?name=${user}`;
        url = setMode(mode, url);

        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e); 
    }
};