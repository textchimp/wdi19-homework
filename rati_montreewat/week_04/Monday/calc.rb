# show amenu
def show_menu
  puts "Calculator"
  puts "-" * 80
  puts "[q] - Quit [a] - add [s] - subtract [m] - multipy [d] - divide [e] - exponent [e] - exponent"
end

def calculate(operator)
  puts "Enter the first number"
  first = gets.chomp.to_f
  puts operator.to_s
  second = gets.chomp.to_f
  puts "The result is #{first.send(operator, second)}"
end

show_menu

# get the user menu choice
user_selection = gets.chomp

until user_selection == 'q'
  case user_selection
  when 'a'
    calculate('+')
  when 's'
    calculate('-')
  when 'm'
    calculate('*')
  when 'd'
    calculate('/')
  when 'e'
    calculate('**')
  when 'r'
    puts "Enter the number being squared"
    first = gets.chomp.to_f
    puts "The result is #{Math.sqrt(first)}"
  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using the calculator"
