const cheesegull = require('./lib/cheesegull');
const scores = require('./lib/scores');
const users = require('./lib/users');
const misc = require('./lib/misc');
const tokens = require('./lib/tokens');

module.exports = {
    getBeatmapInfo: cheesegull.getBeatmapInfo,
    getBeatmapSetInfo: cheesegull.getBeatmapSetInfo,
    searchBeatmaps: cheesegull.searchBeatmaps,
    getBeatmapScores: scores.getBeatmapScores,
    getUserBest: scores.getUserBest,
    getUserRecent: scores.getUserRecent,
    getUserById: users.getUserById,
    getUserByName: users.getUserByName,
    getFullUserById: users.getFullUserById,
    getFullUserByName: users.getFullUserByName,
    getUsersByNameAka: users.getUserByNameAka,
    getUsersByCountry: users.getUsersByCountry,
    getUsersByPrivilegeGroup: users.getUsersByPrivilegeGroup,
    getUsersById: users.getUsersById,
    getUsersByName: users.getUsersByName,
    getUsersByNameAka: users.getUsersByNameAka,
    getUsersByCountry: users.getUsersByCountries,
    getIdOfUser: users.getIdOfUser,
    getUserpageById: users.getUserpageById,
    //getUserpageByName: users.getUserpageByName
    lookupUser: users.lookupUser,
    surprise: misc.surprise,
    ping: misc.ping,
    createToken: tokens.createToken,
    getTokens: tokens.getTokens,
    getTokenInfo: tokens.getTokenInfo,
    //deleteToken: tokens.deleteToken
};
