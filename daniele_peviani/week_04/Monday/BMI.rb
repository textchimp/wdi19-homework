# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "BMI (body mass index) calculator"

print "Please insert your height in cm: "
height = gets.to_f

print "Please insert your weight in kg: "
weight = gets.to_f

bmi = (weight / ((height / 100) ** 2)).round(1)

puts "Your BMI is  #{bmi}"

case bmi
when 1..18.5
  puts "You are underweight"
when 18.5..25
  puts "Your weight is normal"
when 25..30
  puts "You are overweight"
else
  puts "You are obese"
end
