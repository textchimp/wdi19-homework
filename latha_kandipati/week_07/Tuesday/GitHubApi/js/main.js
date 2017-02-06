$(document).ready(function(){
  var languages = {};

  $('#get-trends').on('click',getLatestTrends);

  function getLatestTrends(){
    console.log("Trending technologies: ");
    var url = "https://api.github.com/search/repositories?q=created:>2017-01-24&sort=stars&order=desc";
    $.ajax({url: url}).done(displayResults).fail(function(error){ console.log("AJAX req Failed!"); });
  }

  function displayResults(data){
    console.log(data["total_count"], data["items"].length);
    //data["items"][i]["id"]
    //data["items"][i]["lan"]
    cntr = 0;
    console.log(languages);
    for (var i = 0; i<data["items"].length; i++ ){
      // console.log(data["items"][i]["language"]);
      languages[data["items"][i]["language"]] = 0;
    }
    console.log(languages);
    for (var i = 0; i<data["items"].length; i++ ){
      languages[data["items"][i]["language"]] = (languages[data["items"][i]["language"]] += 1);
    }
    console.log(languages);
    //languages
    // D3 graphs
    // d3.select("body").transition().style("background-color", "black");
    // d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) { return d * 10 + "px"; }).text(function(d) { return d; });
    // drawChart();
    drawNewChart();
  }
  function drawChart(){
    var chartData = [];
    var chartKeys = [];


    for (var lang in languages) {
      chartData.push(languages[lang]);
      chartKeys.push(lang);
      console.log('obj.' + lang, '=', languages[lang]);
    }

		var height = 400;
		var width = 1000;
		var barPadding = 40;
		var barWidth = (width / chartData.length) - barPadding;
    console.log(barWidth);

		var yScale = d3.scale.linear().domain([0, d3.max(chartData)]).range([0, height]);

		var xScale = d3.scale.ordinal().domain(d3.range(0, chartData.length)).rangeBands([0, width]);

		var svg = d3.select("#chartarea").style('width', width + 'px').style('height', height + 'px');

		svg.selectAll('rect')
			.data(chartData)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr("x", function (d, i) {
				return xScale(d);
			})
			.attr("y", function (d, i) {
				return height;
			})
			.attr("width", function (d, i) {
				return xScale.rangeBand()
			})
			.attr("fill", function (d, i) {
				return 'rgb('+ chartData.length +', ' + Math.round(i / 2) + ', ' + i + ')'
			})
			.attr("height", 0)
			.transition()
			.duration(200)
			.delay(function (d, i) {
				return i * 50;
			})
			.attr("y", function (d, i) {
				return height - yScale(d);
			})
			.attr("height", function (d, i) {
				return yScale(d);
			});
  }

  function drawNewChart(){
    var chartData = [];
    var chartKeys = [];

    for (var lang in languages) {
      chartData.push(languages[lang]);
      chartKeys.push(lang);
      console.log('obj.' + lang, '=', languages[lang]);
    }

    var height  = 400,
    width     = 1000,
    barWidth  = 50,
    barOffset = 5;
    var margin = {top: 20, right: 20, bottom: 70, left: 40};
    //color scaling chart
    var colors = d3.scale.linear()
    .domain([0, d3.max(chartData)])
    .range(['#ffb832', '#c61c67']);

    //will remap to fit height of data
    var yScale = d3.scale.linear()
        .domain([0, d3.max(chartData)])
        .range([0, height]);

    //will remap to fit the width and the number of data
    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, chartData.length))
        .rangeBands([0, width]);


    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");
      // .ticks(10);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      // .ticks(10);

    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    var g = svg
      .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + (height + margin.top) + ")");

    // xScale.domain(chartData);
    // yScale.domain(chartKeys);

    g.append("g")
       .attr("class", "x axis")
       .call(xAxis)
       //.attr("transform", "translate(0," + height + ")")
       .append("text")
       .style("text-anchor", "end")
       .attr("dx", "-.8em")
       .attr("dy", "-.55em")
      //  .attr("transform", "rotate(-90)"
        ;
   //
   g.append("g")
       .attr("class", "y axis")
       .call(yAxis)
       .attr("transform", "translate(0," + -height + ")")
       .append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 6)
       .attr("dy", ".71em")
       .style("text-anchor", "end")
       .text("quantity")
       ;

    d3.select('g')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#c9d7d6')
      .selectAll('rect').data(chartData)
      .enter().append('rect')
      .style('fill', colors)
      .attr("transform", "translate(0," + -height + ")")
      .attr('width', xScale.rangeBand())
      .attr('height', function(d) {return yScale(d);} )
      .attr('x', function(d, i) {return xScale(i);})
      .attr('y', function (d) {return height - yScale(d);});
    }
});
