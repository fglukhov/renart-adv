$(document).ready(function () {
	var dataZero = {
		"xScale": "linear",
		"yScale": "linear",
		"type": "line-dotted",
		"main": [
			{
				"className": ".chart-yellow",
				"data": [
					{
						"x": 0,
						"y": 11
					},
					{
						"x": 460,
						"y": 11
					},
					{
						"x": 624,
						"y": 11
					},
					{
						"x": 795,
						"y": 20
					},
					{
						"x": 966,
						"y": 46
					},
					{
						"x": 1135,
						"y": 20
					},
					{
						"x": 1303,
						"y": 65
					},
					{
						"x": 1600,
						"y": 64
					}
				]
			},
			{
				"className": ".chart-red",
				"data": [
					{
						"x": 0,
						"y": 6
					},
					{
						"x": 460,
						"y": 6
					},
					{
						"x": 624,
						"y": 6
					},
					{
						"x": 795,
						"y": 10
					},
					{
						"x": 966,
						"y": 24
					},
					{
						"x": 1135,
						"y": 11
					},
					{
						"x": 1303,
						"y": 34
					},
					{
						"x": 1600,
						"y": 19
					}
				]
			}
		]
	};
	
	var dataHalf = {
		"xScale": "linear",
		"yScale": "linear",
		"type": "line-dotted",
		"main": [
			{
				"className": ".chart-yellow",
				"data": [
					{
						"x": 0,
						"y": 11
					},
					{
						"x": 460,
						"y": 11
					},
					{
						"x": 624,
						"y": 26
					},
					{
						"x": 795,
						"y": 46
					},
					{
						"x": 966,
						"y": 91
					},
					{
						"x": 1135,
						"y": 132
					},
					{
						"x": 1303,
						"y": 247
					},
					{
						"x": 1600,
						"y": 383
					}
				]
			},
			{
				"className": ".chart-red",
				"data": [
					{
						"x": 0,
						"y": 6
					},
					{
						"x": 460,
						"y": 6
					},
					{
						"x": 624,
						"y": 12
					},
					{
						"x": 795,
						"y": 24
					},
					{
						"x": 966,
						"y": 46
					},
					{
						"x": 1135,
						"y": 79
					},
					{
						"x": 1303,
						"y": 106
					},
					{
						"x": 1600,
						"y": 204
					}
				]
			}
		]
	};
	
	var dataFull = {
		"xScale": "linear",
		"yScale": "linear",
		"type": "line-dotted",
		"main": [
			{
				"className": ".chart-yellow",
				"data": [
					{
						"x": 0,
						"y": 11
					},
					{
						"x": 460,
						"y": 11
					},
					{
						"x": 624,
						"y": 36
					},
					{
						"x": 795,
						"y": 67
					},
					{
						"x": 966,
						"y": 121
					},
					{
						"x": 1135,
						"y": 183
					},
					{
						"x": 1303,
						"y": 356
					},
					{
						"x": 1600,
						"y": 550
					}
				]
			},
			{
				"className": ".chart-red",
				"data": [
					{
						"x": 0,
						"y": 6
					},
					{
						"x": 460,
						"y": 6
					},
					{
						"x": 624,
						"y": 19
					},
					{
						"x": 795,
						"y": 35
					},
					{
						"x": 966,
						"y": 66
					},
					{
						"x": 1135,
						"y": 89
					},
					{
						"x": 1303,
						"y": 171
					},
					{
						"x": 1600,
						"y": 226
					}
				]
			}
		]
	};
	
	
	var opts = {
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		axisPaddingTop: 0,
		axisPaddingRight: 0,
		axisPaddingBottom: 0,
		axisPaddingLeft: 0,
		xMin: 0,
		xMax: 1600,
		yMin: 0,
		yMax: 424
		//"dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
		//"tickFormatX": function (x) { return d3.time.format('%A')(x); }
	};
	
	var myChart = new xChart('line', dataZero, '#chartsCont', opts);
	
	$("#changeChart").click(function() {
	});
	
	$("input.switcher").on("change",function() {
		if ($("#features_1").is(":checked") && $("#features_2").is(":checked")) {
			myChart.setData(dataFull)
		} else if ($("#features_1").is(":checked") || $("#features_2").is(":checked")) {
			myChart.setData(dataHalf)
		} else {
			myChart.setData(dataZero)
		}
	});
	
});