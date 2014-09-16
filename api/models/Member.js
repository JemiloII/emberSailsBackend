/**
* Members.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,  
  attributes: {
	 username: {
	   type: 'string',
	   unique: true,
	   required: true
    },
    type: 'string',
    forums: {
  		collection: 'forum',
  		via: 'createdBy'
  	},
    profile: {
      model: 'memberprofile'
    }
  }
};

