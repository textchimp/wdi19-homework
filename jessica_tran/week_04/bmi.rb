
require 'rainbow'

def show_menu
  puts Rainbow("-"*80).blue
  puts Rainbow("BMI calculator").blue
  puts Rainbow("-"*80).blue
  puts "[s]- start"
  puts "[q] - quit"
  print "Enter your menu selection: "
end

show_menu
selection= gets.chomp

until selection == 'q'
  if selection == 's'
    print "What is your weight(kg)? : "
    weight = gets.to_f

    print "What is your height(m)? : "
    height = gets.to_f

    bmi = weight /(height**2)
    bmi = bmi.round(2)
    puts "Your BMI is #{bmi}"

    puts case
    when bmi < 18.5
      "You are underweight"
    when bmi >= 18.5 && bmi <25
      "Your weight is normal"
    when bmi >= 25 && bmi <30
      "You are overweight"
    when bmi >=30
      "You are obese"
    end
    show_menu
    selection= gets.chomp

  else
    puts "Invalid selection"
    show_menu
    selection= gets.chomp
  end
end

puts "Thanks for using the BMI calculator"
