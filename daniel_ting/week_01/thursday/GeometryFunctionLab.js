// Part 1
var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(rectangle) {
  return rectangle.length === rectangle.width;
}

var area = function(rectangle) {
  return rectangle.length * rectangle.width;
}

var perimeter = function(rectangle) {
  return 2 * (rectangle.length + rectangle.width);
}

// Part 2
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle) {
  return triangle.sideA === triangle.sideB && triangle.sideB === trangle.sideC;
}

var isIsosceles = function(triangle) {
  return triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC;
}

var area = function(triangle) {
  var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  return Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
}
