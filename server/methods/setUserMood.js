import { Meteor } from 'meteor/meteor';
Meteor.methods({
	setUserMood(userId, mood) {
		const curMood = Meteor.user().mood || {
			happy: 0,
			sad: 0,
			uncertain: 0,
			confused: 0,
		};
		curMood[mood] = curMood[mood] + 1;
		Meteor.users.update(userId, { $set: { mood: curMood } });
		return true;
	},
});
