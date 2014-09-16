/**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: true,
	attributes: {
		title: {
			type: 'string'
		},
		content: {
			type: 'text'
		},
		thread: {
			model: 'thread'
		},
		createdBy: {
			model: 'member'
		}
	}
};

