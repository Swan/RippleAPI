const cheesegull = require('./lib/cheesegull');
const scores = require('./lib/scores');
const users = require('./lib/users');

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
    getIdOfUser: users.getIdOfUser
};
