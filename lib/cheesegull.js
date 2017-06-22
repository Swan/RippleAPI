const axios = require('axios');

module.exports.getBeatmapInfo = async (beatmapId) => {
    try {
        const response = await axios.get(`http://storage.ripple.moe/b/${beatmapId}`);
        return response.data;
    } catch (e) {
        if (!beatmapId) throw new Error('The beatmapId provided in getBeatmapInfo must not be undefined.');
        throw new Error(`Unable to get beatmap information for /b/${beatmapId}. Either you have entered an incorrect beatmapId, or the map could not be found on Ripple's storage.`, e);
    }
};

