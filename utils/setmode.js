module.exports.setMode = (gameMode, url) => {
    switch(gameMode) {
        case 'osu':
            url = url.concat('&mode=0')
            break;
        case 'taiko':
            url = url.concat('&mode=1')
            break;
        case 'ctb':
            url = url.concat('&mode=2')
            break;
        case 'mania':
            url = url.concat('&mode=3')
            break;
        case 'all':
            break;         
        default:
            throw new Error(`Invalid game mode: '${gameMode}' provided. You must provide either: 'osu', 'taiko', 'ctb', 'mania', or 'all'`);
    }
    return url;
};