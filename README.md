# RippleAPI.js
<p align="center">
<img src="https://suck.eggplants.org/3tk8ye.png" width:150px height:150px>
</p>
RippleAPI.js is an easy to use wrapper for the Ripple osu! private server API. 🎵 I make requests to the Ripple API practically every single day for a various amount of projects, and it was honestly a pain to have to rewrite the same code a billion times. Thus, I've created a library, for myself and others to use. 

# Usage
It's extremely simple to start using RippleAPI.js just by following the steps below.
* Run `npm install rippleapi --save`

```js
const rippleAPI = require('rippleapi');

rippleAPI.ping()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
      throw new Error(err);
    });
```    
# List of Functions
There's a ton of different endpoints on the Ripple API that is currently supported. Here are the following: 

**Misc**
* **ping(token)** - Check the API is alive, and check your token’s (not required) privileges. [GET /ping](http://docs.ripple.moe/docs/api/v1#get-%2Fping)
* **surprise()** - A test API endpoint that spits some random sentences.. [GET /surprise_me](http://docs.ripple.moe/docs/api/v1#get-%2Fsurprise_me)


**Tokens**
* **createToken(username, password, privileges, description)** - Create a new token using username and password. [POST /tokens](http://docs.ripple.moe/docs/api/v1#post-%2Ftokens)
* **getTokens(token)** - Allows to retrieve information about the API tokens of the current user. [GET /tokens](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens)
* **getTokenInfo(token)** - Retrieves information about the passed token. [GET /tokens/self](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens%2Fself)


**Users**

*The following can be used to retrieve only one user.*

* **getUserById(userId)** - Retrieves information about one user by their user Id. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUserByName(username)** - Retrieves information about one user by their username. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getFullUserById(id)** - Retrieves **Full** information about one user by their user id. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getFullUserByName(username)** - Retrieves **Full** information about one user by their username. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getIdOfUser(username)** - Retrieves an ID of an user, knowing their username. Simple as that. [GET /users/whatid](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fwhatid)
* **getUserpageById(id)** - Retrieve the userpage of an user, in BBCode. [GET /users/userpage](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fuserpage)
* **lookupUser(partOfUsername)** - Search for an user knowing (part of) their username. This is mainly used for Ripple’s user search function, in the navbar. [GET /users/lookup](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Flookup)

*The following can be used to retrieve one or more users*

* **getUserByNameAka(nameAka, page)** - Retrieves a list of users by their name_aka. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersByCountry(country, page)** - Retrieves a list of users by their country. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersByPrivilegeGroup(privilegeGroup, page)** - Retrieves a list of users by their Privilege Group. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersById([userIds])** - Retrieves a list of users by their ids. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersByName([usernames])** - Retrieves a list of users by their usernames. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersByNameAka([nameAkas])** - Retrieves a list of users by querying for multiple name_akas. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)
* **getUsersByCountries([countries])** - Retrieves a list of users by querying for multiple countries. [GET /users](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)


**Scores**

*Note: for mode parameters, you can specify either "osu", "taiko", "mania", "ctb", or "all"*

* **getBeatmapScores(beatmapMd5 OR beatmapId, mode)** - Retrieves scores for a certain beatmap. [GET /scores](http://docs.ripple.moe/docs/api/v1#get-%2Fscores)
* **getUserBest(username OR userId, mode)** - Retrieves a user's best scores. [GET /users/scores/best](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fscores%2Frecent%2C-get-%2Fusers%2Fscores%2Fbest)
* **getUserRecent(username OR userId, mode)** - Retrieves a user's recent scores. [GET /users/scores/recent](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fscores%2Frecent%2C-get-%2Fusers%2Fscores%2Fbest)


**Cheesegull (Beatmaps)**

**Note: For gameMode parameters, you can specify either:**

*A single mode: 'mania' OR*

*An array of modes: ['mania', 'osu', 'taiko', 'ctb', 'all']*


**Note: For rankedStatus parameters, you can specify either:** 

*A single status: 'ranked' OR* 

*An array of statuses: ['ranked', 'unranked', 'loved', 'graveyard', 'wip', 'pending', 'approved', 'qualified', 'all']*

* **getBeatmapInfo(beatmapId)** - Retrieves information about a beatmap with the given ID. [GET /api/b/:id](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fb%2F%3Aid)
* **getBeatmapSetInfo(beatmapSetId)** - Retrieve information about a beatmapset, as well as its children, knowing its ID. [GET /api/s/:id](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fs%2F%3Aid)
* **searchBeatmaps(searchQuery, gameMode, rankedStatus, amount, offset)** - Returns beatmaps based on the searched query and details passed. [GET /api/search](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fsearch)
