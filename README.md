# RippleAPI
<p align="center">
<img src="https://suck.eggplants.org/3tk8ye.png" width:150px height:150px>
</p>

RippleAPI is an easy to use JavaScript wrapper for the [Ripple API](https://docs.ripple.moe).🎵 I make requests to the Ripple API practically every single day for a various amount of projects, and it was honestly a pain to have to rewrite the same code a billion times. Thus, I've created a library, for myself and others to use. 

# Usage
It's extremely simple to start using RippleAPI.js just by following the steps below.
* Run `npm install rippleapi --save`

All functions follow the same format listed below. It should be fairly easy to use.

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
* **[ping(token)](http://docs.ripple.moe/docs/api/v1#get-%2Fping)** - Check the API is alive, and check your token’s (not required) privileges.
* **[surprise()](http://docs.ripple.moe/docs/api/v1#get-%2Fsurprise_me)** - A test API endpoint that spits some random sentences.

---

**Badges**
* **[getBadges()](http://ripple.moe/api/v1/badges)** - Retrieve a list of all the current badges on Ripple.


---

**Leaderboard**

Note: For mode parameters you can specify either: `'mania', 'osu', 'taiko', 'ctb' OR 'all'`

* **[getLeaderboard(mode, page)](http://ripple.moe/api/v1/leaderboard)** - Retrieve a list of all the current leaderboard on Ripple. 


---

**Tokens**
* **[createToken(username, password, privileges, description)](http://docs.ripple.moe/docs/api/v1#post-%2Ftokens)** - Create a new token using username and password.
* **[getTokens(token)](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens)** - Allows to retrieve information about the API tokens of the current user.
* **[getTokenInfo(token)](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens%2Fself)** - Retrieves information about the passed token.

---

**Users**

The following can be used to retrieve only one user:

* **[getUserById(userId)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves information about one user by their user Id. 
* **[getUserByName(username)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves information about one user by their username.
* **[getFullUserById(id)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves **Full** information about one user by their user id.
* **[getFullUserByName(username)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves **Full** information about one user by their username. 
* **[getIdOfUser(username)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fwhatid)** - Retrieves an ID of an user, knowing their username. Simple as that.
* **[getUserpageById(id)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fuserpage)** - Retrieve the userpage of an user, in BBCode. 
* **[lookupUser(partOfUsername)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Flookup)** - Search for an user knowing (part of) their username. This is mainly used for Ripple’s user search function, in the navbar.

---

The following can be used to retrieve one or more users:

* **[getUserByNameAka(nameAka, page)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by their name_aka.
* **[getUsersByCountry(country, page)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by their country.
* **[getUsersByPrivilegeGroup(privilegeGroup, page)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by their Privilege Group.
* **[getUsersById([userIds])](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by their ids. 
* **[getUsersByName([usernames])](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by their usernames. 
* **[getUsersByNameAka([nameAkas])](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by querying for multiple name_akas.
* **[getUsersByCountries([countries])](http://docs.ripple.moe/docs/api/v1#get-%2Fusers)** - Retrieves a list of users by querying for multiple countries.


---

**Scores**

Note: for mode parameters, you can specify either `"osu", "taiko", "mania", "ctb", or "all"`

* **[getBeatmapScores(beatmapMd5 OR beatmapId, mode)](http://docs.ripple.moe/docs/api/v1#get-%2Fscores)** - Retrieves scores for a certain beatmap.
* **[getUserBest(username OR userId, mode)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fscores%2Frecent%2C-get-%2Fusers%2Fscores%2Fbest)** - Retrieves a user's best scores.
* **[getUserRecent(username OR userId, mode)](http://docs.ripple.moe/docs/api/v1#get-%2Fusers%2Fscores%2Frecent%2C-get-%2Fusers%2Fscores%2Fbest)** - Retrieves a user's recent scores.

---


**Cheesegull**

**Note: For gameMode parameters, you can specify either:**

A single mode string: `'mania', 'osu', 'taiko' 'ctb', 'all'`

**OR**

An array of modes: `['mania', 'osu', 'taiko', 'ctb', 'all']`


---

**Note: For rankedStatus parameters, you can specify either:** 

A single status string: `'ranked', 'unranked', 'loved', 'graveyard', 'wip', 'pending', 'approved', 'qualified', 'all'`

**OR**

An array of statuses: `['ranked', 'unranked', 'loved', 'graveyard', 'wip', 'pending', 'approved', 'qualified', 'all']`

---

* **[getBeatmapInfo(beatmapId)](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fb%2F%3Aid)** - Retrieves information about a beatmap with the given ID.
* **[getBeatmapSetInfo(beatmapSetId)](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fs%2F%3Aid)** - Retrieve information about a beatmapset, as well as its children, knowing its ID.
* **[searchBeatmaps(searchQuery, gameMode, rankedStatus, amount, offset)](http://docs.ripple.moe/docs/cheesegull/cheesegull-api#get-%2Fapi%2Fsearch)** - Returns beatmaps based on the searched query and details passed.

# Checklist
For the most part, everything useful is done. Here's a list of things that aren't done. 
* WebSocket API [✗]
* Documentation [✗]
* Blog [✗]
* Requests that require a security key [✗]

# LICENSE
MIT License

Copyright (c) 2017 Swan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
