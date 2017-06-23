# RippleAPI.js
<p align="center">
<img src="https://suck.eggplants.org/3tk8ye.png" width:150px height:150px>
</p>
RippleAPI.js is an easy to use wrapper for the Ripple osu! private server API. 🎵 I make requests to the Ripple API practically every single day for a various amount of projects, and it was honestly a pain to have to rewrite the same code a billion times. Thus, I've created a library, for myself and others to use. 

# Usage
It's extremely simple to start using RippleAPI.js just by following the steps below.
* Run `npm install rippleapi`

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
* ping(token) - Check the API is alive, and check your token’s (not required) privileges. [GET /ping](http://docs.ripple.moe/docs/api/v1#get-%2Fping)
* surprise() - A test API endpoint that spits some random sentences.. [GET /surprise_me](http://docs.ripple.moe/docs/api/v1#get-%2Fsurprise_me)

**Tokens**
* createToken(username, password, privileges, description). Create a new token using username and password. [POST /tokens](http://docs.ripple.moe/docs/api/v1#post-%2Ftokens)
* getTokens(token) - Allows to retrieve information about the API tokens of the current user. [GET /tokens](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens)
* getTokenInfo(token) - Retrieves information about the passed token. [GET /tokens/self](http://docs.ripple.moe/docs/api/v1#get-%2Ftokens%2Fself)
