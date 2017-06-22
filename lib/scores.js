const axios = require('axios');
const validator = require('validator');

module.exports.getBeatmapScores = async (beatmap, mode) => {
    try {
        if (typeof beatmap == 'number') {
            url = `https://ripple.moe/api/v1/scores?b=${beatmap}`;
        } else if (validator.isMD5(beatmap)) {
            url = `https://ripple.moe/api/v1/scores?md5=${beatmap}`;
        } else {
            throw new Error('beatmap must be an integer or a valid md5 string');
        }

        switch(mode) {
            case 'osu':
                url = url.concat('&mode=0');
                break;
            case 'taiko':
                url = url.concat('&mode=1');
                break;
            case 'ctb':
                url = url.concat('&mode=2');
                break;
            case 'mania':
                url = url.concat('&mode=3');
                break;
            case 'all':
                break;
            default:
                throw new Error(`Invalid game mode: '${mode}' provided. You must provide either: 'osu', 'taiko', 'ctb', 'mania', or 'all'`);
        } 

        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};