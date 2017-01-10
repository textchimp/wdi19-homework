# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

# print "Are you male or female? (m/f): "
# sex = gets.chomp.downcase

print "What is your weight? (kg): "
weight = gets.to_f

print "What is your height? (cm): "
height = gets.to_f

bmi = ((weight / height**2) * 10000).round(1)
puts "Your BMI is #{bmi}"

puts case bmi
when bmi < 18.5
  "You are underweight. BMI below 18.5"
when bmi > 18.5 && bmi < 25
  "You are in the healthy weight range. BMI between 18.5 and 25"
when bmi > 25 && bmi < 30
  "You are overweight. BMI between 25 and 30"
else
  "You are obese. BMI over 30"
end
