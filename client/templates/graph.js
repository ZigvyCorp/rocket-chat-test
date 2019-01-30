import { Template } from 'meteor/templating';
import Highcharts from 'highcharts';
import { Meteor } from 'meteor/meteor';


Template.graph.helpers({
	createChart() {
		// Gather data:
		const curUserMoodsArr = Object.keys(Meteor.user().mood).map((key) => ({
			name: key,
			data: [Meteor.user().mood[key]],
		}));
		// Use Meteor.defer() to craete chart after DOM is ready:
		Meteor.defer(function() {
			// Create standard Highcharts chart with options:
			Highcharts.chart('chart', {
				chart: {
					type: 'column',
				},
				title: { text: null },
				xAxis: {
					categories: [
						'Moods',
					],
					crosshair: true,
				},
				yAxis: {
					min: 0,
					title: {
						text: null,
					},
				},
				series: curUserMoodsArr,
			});
		});
	},
});



