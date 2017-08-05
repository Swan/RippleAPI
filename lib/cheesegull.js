const axios = require('axios');
const { setMode } = require('../utils/setmode');

module.exports.getBeatmapInfo = async (beatmapId) => {
    try {
        const response = await axios.get(`https://storage.ripple.moe/b/${beatmapId}`);
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

module.exports.searchBeatmaps = async (searchQuery, gameMode, rankedStatus, amount, offset) => {
    try {
        // In the event that no ammount or offset was given, have a default. 
        if (!amount) amount = 100;
        if (!offset) offset = 0;

        let url = `https://storage.ripple.moe/api/search?query=${searchQuery}&amount=${amount}&offset=${offset}`;
        url = setMode(gameMode, url);

        // In the event that only the rankedStatus passed isn't an array, but it is still a valid status.
        if (rankedStatus && !Array.isArray(rankedStatus)) {
            url = setRankedStatus(rankedStatus, url);
        };
     
        // In the event that only the rankedStatus passed is an array.
        if (rankedStatus && Array.isArray(rankedStatus)) {
            rankedStatus.forEach((status) => {
                url = setRankedStatus(status, url);
            });
        };

        const response = await axios.get(url)
        return response.data;
    } catch (e) {
        throw new Error(e)
    }
};

const setRankedStatus = (status, url) => {
    switch(status) {
        case 'graveyard':
            url = url.concat(`&status=-2`);
            break;
        case 'wip':
            url = url.concat(`&status=-1`);
            break;                                      
        case 'pending':
            url = url.concat(`&status=0`);                
            break;                                 
        case 'ranked':
            url = url.concat(`&status=1&status=2`);
            break;
        case 'approved':
            url = url.concat(`&status=2`);
            break;
        case 'qualified':
            url = url.concat(`&status=3`);
            break;
        case 'loved':
            url = url.concat(`&status=4`);
            break;
        case 'unranked':
            url = url.concat(`&status=-1&status=-2&status=0`);
            break;
        case 'all':
            // Nothing really changes here, just an extra option to make code more readable.
            break; 
        default:
            throw new Error(`Invalid ranked status (${status}) provided. You must provide either: 'ranked', 'approved', 'qualified', 'loved', 'graveyard', 'wip', 'unranked', or 'all'`);       
    }
    return url;
};
