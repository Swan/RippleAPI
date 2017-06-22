const cheesegull = require('./lib/cheesegull');
const scores = require('./lib/scores');

module.exports = {
    getBeatmapInfo: cheesegull.getBeatmapInfo,
    getBeatmapSetInfo: cheesegull.getBeatmapSetInfo,
    searchBeatmaps: cheesegull.searchBeatmaps,
    getBeatmapScores: scores.getBeatmapScores
};
