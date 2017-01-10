# show menu
def show_menu
  puts "Calculator"
  puts "-" * 80
  puts "[a]  -  Addition"
  puts "[s]  -  Subtraction"
  puts "[m]  -  Multiplication"
  puts "[d]  -  Division"
  puts "[e]  -  Exponential"
  puts "[sq] -  Square root"
  puts "[q]  -  Quit"
  print "Enter your menu selection: "
end

def get_numbers
  print "Select first number: "
  num1 = gets.to_i
  print "Select second number: "
  num2 = gets.to_i
  [num1, num2]
end

show_menu

# get menu choice
user_selection = gets.chomp.downcase

until user_selection == 'q'
  case user_selection
  when 'a'
    num1, num2 = get_numbers
    puts "#{num1} + #{num2} = #{num1 + num2}\n\n\n"
  when 's'
    num1, num2 = get_numbers
    puts "#{num1} - #{num2} = #{num1 - num2}\n\n\n"
  when 'm'
    num1, num2 = get_numbers
    puts "#{num1} * #{num2} = #{num1 * num2}\n\n\n"
  when 'd'
    num1, num2 = get_numbers
    puts "#{num1} / #{num2} = #{num1 / num2}\n\n\n"
  when 'p'
    print "Select base number: "
    base = gets.to_i
    print "Select exponent number: "
    exp = gets.to_i
    puts "#{base} raised to #{exp} = #{base ** exp}\n\n\n"
  when 'sq'
    print "Select number: "
    num = gets.to_i
    puts "The square root of #{num} is #{Math.sqrt(num)}\n\n\n"
  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using this calculator."
