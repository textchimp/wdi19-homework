var subway = {

  stations: {
    N: "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(", "),
    L: "8th, 6th, Union Square, 3rd, 1st".split(", "),
    6: "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(", "),
  },

  calculateTrip: function (start, end) {
    var startLine = start[0];
    var startStation = start[1];
    var endLine = end[0];
    var endStation = end[1];

    var startIndex = this.stations[startLine].indexOf(startStation);
    if(startLine === endLine) {
      var endIndex = this.stations[endLine].indexOf(endStation);
    } else {
      var endIndex = this.stations[startLine].indexOf('Union Square');
    };

    var output = '<p>You must travel through the following stops on the ' + startLine + ' line: ' + this.getStops(startLine, startIndex, endIndex) + '.</p>'

    if(startLine !== endLine) {
      output += '<p>Change at Union Square</p>';
      startIndex = this.stations[endLine].indexOf('Union Square');
      endIndex = this.stations[endLine].indexOf(endStation);
      if (startIndex !== endIndex) {
        output += '<p>Your journey continues through the following stops: '+ this.getStops(endLine, startIndex, endIndex) + '.</p>';
      };
    };
    $('<div/>').html(output).appendTo($('#results'));
  },

  getStops: function(line, startIndex, endIndex) {
    if (startIndex > endIndex) {
      var stops = this.stations[line];
      stops = stops.slice(endIndex, startIndex);
      stops.reverse();
    } else {
      var stops = this.stations[line].slice(startIndex + 1, endIndex +1);
    };
    return stops.join(", ");
  }
};


$(document).ready(function () {
  _(subway.stations).each(function (stops, line) {
    _(stops).each(function (stop) {
      var $option = $('<option/>', {value: line + '-' + stop, text: line + ' - ' + stop});
      $('#select-start, #select-end').append($option);
    });
  });

  $('#btn-submit').on('click', function(event) {
    if (!$('#select-start').val() || !$('#select-end').val()) {return;};
    $('#results').empty();
    var start = $('#select-start').val().split('-');
    var end = $('#select-end').val().split('-');
    subway.calculateTrip(start, end);
  });




  var lineN = [
  [200, 200, 'Times Square'],
  [300, 200, '34th'],
  [400, 200, '28th'],
  [500, 200, '23rd'],
  [600, 200, 'Union Square'],
  [700, 200, '8th'],
  ];
  var lineL = [
  [200, 350, '8th'],
  [300, 350, '6th'],
  [400, 350, 'Union Square'],
  [500, 350, '3rd'],
  [600, 350, '1st'],
  ];
  var line6 = [
  [200, 500, 'Grand Central'],
  [300, 500, '33rd'],
  [400, 500, '28th'],
  [500, 500, '23rd'],
  [600, 500, 'Union Square'],
  [700, 500, 'Astor Place'],
  ];

  var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 600);

  var pathN = svg.append("path")
    .data([lineN])
    .attr("d", d3.svg.line()
    .tension(0) // Catmull–Rom
    .interpolate("basis"));

  var pathL = svg.append("path")
      .data([lineL])
      .attr("d", d3.svg.line()
      .tension(0) // Catmull–Rom
      .interpolate("basis"));

  var path6 = svg.append("path")
    .data([line6])
    .attr("d", d3.svg.line()
    .tension(0) // Catmull–Rom
    .interpolate("basis"));

  svg.selectAll(".point")
      .data(lineN)
      .enter().append("circle")
      .attr("r", 10)
      .attr("transform", function(d) { return "translate(" + d[0] + ", " + d[1] + ")"; });

  svg.selectAll(".point")
      .data(lineN)
      .enter().append("text")
      .attr("x", function(d) { return d[0]; })
      .attr("y", function(d) { return d[1] - 20; })
      .text(function(d) { return d[2]; })
      .attr("transform", function(d) { return "rotate(-45 " + d[0] + ", " + (d[1] - 20) + ")"; });

  svg.selectAll(".point")
      .data(lineL)
      .enter().append("circle")
      .attr("r", 10)
      .attr("transform", function(d) { return "translate(" + d[0] + ", " + d[1] + ")"; });

  svg.selectAll(".point")
      .data(lineL)
      .enter().append("text")
      .attr("x", function(d) { return d[0]; })
      .attr("y", function(d) { return d[1] - 20; })
      .text(function(d) { return d[2]; })
      .attr("transform", function(d) { return "rotate(-45 " + d[0] + ", " + (d[1] - 20) + ")"; });

  svg.selectAll(".point")
      .data(line6)
      .enter().append("circle")
      .attr("r", 10)
      .attr("transform", function(d) { return "translate(" + d[0] + ", " + d[1] + ")"; });

  svg.selectAll(".point")
      .data(line6)
      .enter().append("text")
      .attr("x", function(d) { return d[0]; })
      .attr("y", function(d) { return d[1] - 20; })
      .text(function(d) { return d[2]; })
      .attr("transform", function(d) { return "rotate(-45 " + d[0] + ", " + (d[1] - 20) + ")"; });

  var circle = svg.append("circle")
    .attr("r", 15)
    .attr("transform", "translate(" + lineN[0] + ", " + lineN[1] + ")");

  transition();

  function transition() {
    circle.transition()
      .duration(10000)
      .attrTween("transform", translateAlong(pathN.node()))
      .each("end", transition);
  };

  // Returns an attrTween for translating along the specified path element.
  function translateAlong(path) {
    var l = path.getTotalLength();
    return function(d, i, a) {
      return function(t) {
        var p = path.getPointAtLength(t * l);
        return "translate(" + p.x + "," + p.y + ")";
      };
    };
  };


});
