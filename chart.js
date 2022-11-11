console.log('chart.js loaded');
var options = {
  type: 'line',
  options: {
    plugins: {
      title: {
        display: true
      },
        beforeInit: function(chart, args, options) {
            console.log('x');
        }
    }
  },
  
  data: {
    labels: ['','','Oct 31 3p','Oct 31 10p','1 Nov 11a','','1 Nov 7a','1 Nov 3p','','2 Nov 5a','2 Nov 1p','','2 Nov 7p','','3 Nov 5a','3 Nov 12p','','3 Nov 6p','4 Nov 12a','','4 Nov 6a','','4 Nov 6p','','5 Nov 6a','5 Nov 12:40p','','5 Nov 11:30p','7 Nov 5a','7 Nov 5p','8 Nov 5a', '9 Nov 5a', '10 Nov 5a', '10 Nov 3p'],
    datasets: [
	    {
	      label: 'Level',
	      data: [null, null, 16, 14.7, 11.1, null, 9.2, 8.8, null, 12, 13.7, null, 13.3, null, 13.3, 13, null, 12.4, 10.9, null, 11.3, null, 13.9, null, 15.5, 16.6, null, null, 10.9, 12, 14.4, 16.3, 16.7,17.3],
      	borderWidth: 3,
        fill:false,
        spanGaps: true,
        tension: 0,
        borderColor: 'blue',
        pointRadius: 0,
    	},	
      {
	      label: 'Low',
	      data: [null, 4, 5, null, null, 7, null, 9, 9.5, null, null, 11.1, 11.8, null, null, 12.4, null, null, 12.8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,13],
      	borderWidth: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        pointRadius: 0,
        spanGaps: true,
        tension: 0
    	},	
			{
				label: 'Low Intermediate',
				data: [null, 5, 6, null, null, 9, null, 11.3, 13, null, null, 14.3, null, 14.8, null, null, 15.1, null, null, 15.5, null, 15.7, null, 15.5, null, null, 15.2, 15.2, 15.2, 15.2, 15.2, 15.2, 15.2, 15.2],
				borderWidth: 1,
        pointRadius: 0,
        spanGaps: true,
        tension: 0,
        backgroundColor: 'rgba(255,255,255,0.5)'
			},
      {
				label: 'High Intermediate',
				data: [null, 7,8, null, null, 11, null, 13, 15, null, null, 16, null, 16.8, null, null, 17.3, null, null, 17.5, null, 17.8, null, 17.5, null, null, 17.3, 17.3, 17.3, 17.3, 17.3, 17.3, 17.3],
				borderWidth: 1,
        pointRadius: 0,
        spanGaps: true,
        tension: 0,
        backgroundColor: 'rgba(255,255,255,0.5)'
			},
      {
				label: 'High',
				data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,25, 25, 25, 25, 25, 25, 25, 25,25, 25,25],
				borderWidth: 1,
        pointRadius: 0,
        spanGaps: true,
        tension: 0,
        backgroundColor:'rgba(128,0,0,0.7)'
			}
		]
  },
  options: {
  	scales: {
    	yAxes: [{
        ticks: {
					reverse: false
        }
      }]
    }
  }
}

var ctx = document.getElementById('chartJSContainer').getContext('2d');
new Chart(ctx, options);
console.log(options);
