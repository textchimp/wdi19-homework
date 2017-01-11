#CALCULATOR
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
require 'rainbow'
#show a menu
def show_menu
  puts Rainbow("Calculator").blue
  puts "-" * 80
  puts "[+] - Addition"
  puts "[-] - Minus"
  puts "[/] - Divide"
  puts "[*] - Multiply"
  puts "[**] - Exponents"
  puts "[sqrt] - Square Root"
  puts "[q] - Quit"
  print Rainbow("Enter your menu selection : ").blue.inverse
end

show_menu
user_selection = gets.chomp.downcase

#choose operation
until user_selection == 'q'

#obtain values from user
  if user_selection == 'sqrt'
    print "What value do you want to use? : "
    first_value = gets.chomp.to_f
  elsif user_selection == '**'
    print "What base value do you want to use? : "
    first_value = gets.chomp.to_f
    print "To the power of what? : "
    second_value = gets.chomp.to_f
  elsif ['+','-','*','/'].include? "#{user_selection}"
    print "What is the first value you want to use? : "
    first_value = gets.chomp.to_f
    print "What is the second value you want to use? : "
    second_value = gets.chomp.to_f
  end

  result=''

  #show result
  case user_selection
  when '+'
    result = first_value + second_value
  when '-'
    result = first_value - second_value
  when '/'
    result = first_value/second_value
  when '*'
    result = first_value * second_value
  when '**'
    result = first_value ** second_value
  when 'sqrt'
    result = Math.sqrt(first_value)
  else
    puts Rainbow("Invalid selection").red.inverse
  end

  if ['+','-','*','/','**','sqrt'].include? "#{user_selection}"
    puts Rainbow("Calculate: #{first_value} #{user_selection} #{second_value}").magenta.inverse
    puts Rainbow("Result: #{result}").cyan.inverse
    puts "-"*80
  end

  first_value = ''
  second_value = ''

  show_menu
  user_selection = gets.chomp.downcase
end

puts Rainbow("Thank you for using the crappy calculator").green.inverse
