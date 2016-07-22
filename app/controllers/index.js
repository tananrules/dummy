import Ember from 'ember';

export default Ember.Controller.extend({
	tagButtons: [
		"Advocacy",
		"African American",
		"ASIAN AMERICAN",
		"CESSATION/QUITTING",
		"COALITION BUILDING",
		"COMMUNITY EVENTS",
		"DATA-NATIONAL",
		"DATA-WI",
		"DISPARITIES",
		"E-CIGARETTES",
		"EDITORIAL BOARD",
		"ENVIRONMENTAL SCAN", 	
		"EVALUATION",
		"FACT",
		"FACTSHEET",
		"HISPANIC/LATINO",
		"LAWS/REGULATIONS",
		"LGBT",
		"LOW SES",
		"LTE",
		"Map"
	],
	actions: {
		sortTag(tag) {
			this.set('selectedTag', tag);
			tag = tag.toLowerCase();
			let results = [];
			this.get('model').forEach((item) => {	
				if(item.tags.contains(tag)) {
					results.push(item);
				}
			});
			this.set('filteredResults', results);
		}
	}
});
