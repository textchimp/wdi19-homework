puts "*" * 80

puts "Welcome to teh world's most advanced Body Mass Index Calculator"

puts "*" * 80

print "Lets begin by letting us know your height in centimetres : "

height = gets.to_i

height_meters = height.to_f/100

print "Great, so you are #{height}cm tall. How about the touchy subject of weight? Please enter in kilograms: "

weight = gets.to_f

bmi = (weight/height_meters)/height_meters

print "Being #{height}cm tall and weighing #{weight} means you have a Body Mass Index of #{bmi}"
