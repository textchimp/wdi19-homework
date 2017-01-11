require 'rainbow'

print Rainbow("Enter your height").yellow + Rainbow(" in meters: ").coral
ht = gets.to_f

print Rainbow("Enter you weight ").yellow + Rainbow("in kg: ").coral
wt = gets.to_f

bmi = (wt / ht) / ht

puts ("You BMI is: ") + ("#{bmi}")

if bmi < 18.5
  puts Rainbow("You are considered underweight and possibly malnourished.").indianred
elsif bmi >= 18.5 && bmi <= 24.9
  puts Rainbow("You are within a healthy weight range for young and middle-aged adults.").green
elsif bmi >= 25.0 && bmi <=29.9
  puts Rainbow("You are considered overweight.").orangered
else
  puts Rainbow("You are considered Obese.").red
end
