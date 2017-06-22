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

module.exports.getBeatmapSetInfo = async (beatmapSetId) => {
    try {
        const response = await axios.get(`http://storage.ripple.moe/s/${beatmapSetId}`);
        return response.data;
    } catch (e) {
        if (!beatmapSetId) throw new Error('The beatmapSetId provided in getBeatmapInfo must not be undefined.');
        throw new Error(`Unable to get beatmap set information for /s/${beatmapSetId}. Either you have entered an incorrect beatmapSetId, or the mapset could not be found on Ripple's storage.`, e);
    }
};