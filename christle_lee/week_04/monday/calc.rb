# show a menu
require 'rainbow'
def show_menu
  puts "-"*37
  puts Rainbow("|             Calculator            |").lavender
  puts "-"*37
  puts Rainbow("| [a] - Addition                    |").cyan
  puts Rainbow("| [s] - Subtraction                 |").yellow
  puts Rainbow("| [m] - Multiplication              |").green
  puts Rainbow("| [d] - Division                    |").magenta
  puts Rainbow("| [q] - Quit                        |").indianred
  puts "-"*37
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == 'q'
  case user_selection
  when 'a'
    print "Input first number: "
    x = gets.to_i
    print "Input second number: "
    y = gets.to_i
    puts Rainbow("#{ x } + #{ y } = #{ x + y }").cyan
 when 's'
   print "Input first number: "
   x = gets.to_i
   print "Input second number: "
   y = gets.to_i
   puts Rainbow("#{ x } - #{ y } = #{ x - y }").yellow
 when 'm'
   print "Input first number: "
   x = gets.to_i
   print "Input second number: "
   y = gets.to_i
   puts Rainbow("#{ x } x #{ y } = #{ x * y }").green
 when 'd'
   print "Input first number: "
   x = gets.to_i
   print "Input second number: "
   y = gets.to_i
   puts Rainbow("#{ x } / #{ y } = #{ x / y }").magenta
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts Rainbow("Thank you for using the crappy calculator.").blue.bright.underline
