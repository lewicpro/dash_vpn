$(function() {
    "use strict";
	  
	  // chart 1
	 
		  var ctx = document.getElementById('chart1').getContext('2d');
		
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
					datasets: [{
						label: 'Support Costs',
						barPercentage: .4,
						data: [25, 23, 27, 15, 27, 23, 31, 41, 31, 25, 35],
						backgroundColor: 'rgba(255, 255, 255, 0.12)',
						borderColor: "transparent",
						borderWidth: 3
					}, {
						label: 'Revenue',
						type: 'line',
						data: [10, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20],
						backgroundColor: "rgba(255, 255, 255, 0.12)",
						borderColor: "#fff",
						pointBackgroundColor:'transparent',
                        pointHoverBackgroundColor:'#fff',
						pointBorderWidth :3,
						pointRadius :3,
						pointHoverRadius :3,
						borderWidth: 2
						
					}]
				},
			options: {
				maintainAspectRatio: false,
				legend: {
				  display: true,
				  labels: {
					fontColor: '#ddd',  
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},	
			  scales: {
				  xAxes: [{
					
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }]
				 }

			 }
			}); 
			
			
			
	    //pie
            $("span.pie").peity("pie",{
                width: 158,
                height: 158 
            });
        
        //donut

          $("span.donut").peity("donut",{
                width: 158,
                height: 158 
            });
			
			
	
	  });	