const axios = require('axios');

module.exports.getUserById = async (userId) => {
    try {
        if (!userId) throw new Error('A userId must be provided.');
        if (typeof userId != 'number') throw new Error('The userId provided must be a number.');

        let url = `http://ripple.moe/api/v1/users?id=${userId}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUserByName = async (username) => {
    try {
        if (!username) throw new Error('A username must be provided.');
        if (typeof username != 'string') throw new Error('The username provided must be a string.');

        let url = `http://ripple.moe/api/v1/users?name=${username}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};


module.exports.getFullUserById = async (id) => {
    try {
        if (!id) throw new Error('An id must be provided.');
        if (typeof id != 'number') throw new Error('The id provided must be an integer.');

        let url = `http://ripple.moe/api/v1/users/full?id=${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getFullUserByName = async (username) => {
    try {
        if (!username) throw new Error('A username must be provided.');
        if (typeof username != 'string') throw new Error('The username provided must be a string.');

        let url = `http://ripple.moe/api/v1/users/full?name=${username}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};


module.exports.getUserByNameAka = async (nameAka, page) => {
    try {
        if (!page) page = 1;
        if (!nameAka) throw new Error('A nameAka must be provided.');
        if (typeof nameAka != 'string') throw new Error('The nameAka provided must be a string.');

        let url = `http://ripple.moe/api/v1/users?name_aka=${nameAka}&p=${page}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersByCountry = async (country, page) => {
    try {
        if (!page) page = 1
        if (!country) throw new Error('A country must be provided.');
        if (country.length != 2) throw new Error('The country provided must be a valid 2 digit country code.');

        let url = `http://ripple.moe/api/v1/users?country=${country}&p=${page}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersByPrivilegeGroup = async (privilegeGroup, page) => {
    try {
        if (!page) page = 1;
        if (!privilegeGroup) throw new Error('A privilegeGroup must be provided.');
        if (typeof privilegeGroup != 'string') throw new Error('The privilegeGroup provided must be a string.');

        switch (privilegeGroup.toLowerCase()) {
            case 'community manager':
            case 'bat':
            case 'donor':
            case 'chat mod':
            case 'developer':
                break;
            default:
                throw new Error("The privilegeGroup provided must be either: 'community manager', 'bat', 'donor', 'chat mod', or 'developer'");
        }

        let url = `http://ripple.moe/api/v1/users?privilege_group=${privilegeGroup}&p=${page}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersById = async (userIds) => {
    try {
        if (!userIds) throw new Error('userIds must be provided.');
        if (!Array.isArray(userIds)) throw new Error("The userIds provided must be an array.");

        let url = `http://ripple.moe/api/v1/users?`;

        userIds.forEach((userId) => {
            if (typeof userId != 'number') throw new Error('The userIds provided must be an array of integers.');
            url = url.concat(`ids=${userId}&`);
        });

        const response = await axios.get(url);
        return response.data;      
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersByName = async (usernames) => {
    try {
        if (!usernames) throw new Error('usernames must be provided.');
        if (!Array.isArray(usernames)) throw new Error("The usernames provided must be an array.");

        let url = `http://ripple.moe/api/v1/users?`;

        usernames.forEach((username) => {
            if (typeof username != 'string') throw new Error('The usernames provided must be an array of strings.');
            url = url.concat(`names=${username}&`);
        });
        
        const response = await axios.get(url);
        return response.data;      
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersByNameAka = async (nameAkas) => {
    try {
        if (!nameAkas) throw new Error('nameAkas must be provided.');
        if (!Array.isArray(nameAkas)) throw new Error("The nameAkas provided must be an array.");

        let url = `http://ripple.moe/api/v1/users?`;

        nameAkas.forEach((nameAka) => {
            if (typeof nameAka != 'string') throw new Error('The nameAkas provided must be an array of strings.');
            url = url.concat(`names_aka=${nameAka}&`);
        });
        
        const response = await axios.get(url);
        return response.data;      
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUsersByCountries = async (countries) => {
    try {
        if (!countries) throw new Error('countries must be provided.');
        if (!Array.isArray(countries)) throw new Error("The countries provided must be an array.");

        let url = `http://ripple.moe/api/v1/users?`;

        countries.forEach((country) => {
            if (typeof country != 'string') throw new Error('The countries provided must be an array of strings.');
            url = url.concat(`countries=${country}&`);
        });
        
        const response = await axios.get(url);
        return response.data;      
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getIdOfUser = async (username) => {
    try {
        if (!username) throw new Error('A username must be provided.');
        if (typeof username != 'string') throw new Error('The username provided must be a string.');

        let url = `http://ripple.moe/api/v1/users/whatid?name=${username}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports.getUserpageById = async (id) => {
    try {
        if (!id) throw new Error('An id must be provided.');
        if (typeof id != 'number') throw new Error('The id provided must be an integer.');

        let url = `http://ripple.moe/api/v1/users/userpage?id=${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
};

// module.exports.getUserpageByName = async (username) => {
//     try {
//         if (!username) throw new Error('A username must be provided.');
//         if (typeof username != 'string') throw new Error('The username provided must be a string.');

//         let url = `http://ripple.moe/api/v1/users/userpage?name=${username}`;
//         const response = await axios.get(url);
//         return response.data;
//     } catch (e) {
//         throw new Error(e);
//     }
// };