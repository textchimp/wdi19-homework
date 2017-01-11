# Show user menu
require 'rainbow'

def show_menu
  puts Rainbow("="*80).magenta
  puts Rainbow("Calculator").cyan
  puts Rainbow("="*80).magenta
  puts Rainbow("[a] - Addition").cyan
  puts Rainbow("[s] - Subtraction").cyan
  puts Rainbow("[m] - Mutliplication").cyan
  puts Rainbow("[d] - Division").cyan
  puts Rainbow("[e] - Exponential").cyan
  puts Rainbow("[sq] - Square root of").cyan
  puts Rainbow("[q] - Quit").cyan
end

def math_operations (operation, num1, num2)
  puts Rainbow("="*80).magenta
  puts case operation
  when 'a'
   Rainbow("Addition of two numbers:").cyan + Rainbow(" #{num1}").yellow + Rainbow(", ").cyan + Rainbow("#{num2}").yellow + Rainbow( " is:  ").cyan + Rainbow("#{num1 + num2}").yellow.bright.underline
  when 's'
   Rainbow("Subtraction of").cyan + Rainbow(" #{num2}").yellow + Rainbow(" from ").cyan + Rainbow("#{num1}").yellow + Rainbow(" is:  ").cyan + Rainbow("#{num1 - num2}").yellow.bright.underline
  when 'm'
   Rainbow("Multiplication of two numbers: ").cyan + Rainbow("#{num1}").yellow + Rainbow(", ").cyan + Rainbow("#{num2}").yellow + Rainbow(" is:  ").cyan + Rainbow("#{num1 * num2}").yellow.bright.underline
  when 'd'
   Rainbow("Division of ").cyan + Rainbow("#{num1}").yellow + Rainbow(" by ").cyan + Rainbow("#{num2}").yellow + Rainbow(" is:  ").cyan + Rainbow("#{num1.to_f / num2}").yellow.bright.underline
  when 'e'
   Rainbow("#{num1}").yellow + Rainbow(" to the power of ").cyan + Rainbow("#{num2}").yellow + Rainbow(" is: ").cyan + Rainbow("#{num1 ** num2}").yellow.bright.underline
  else
    Rainbow("Invalid selection.").indianred
  end
  puts Rainbow("="*80).magenta
end

show_menu


# Get user menu choice
print Rainbow("Enter your menu selection: ").green
user_selection = gets.chomp.downcase

until user_selection == 'q'
  if user_selection == 'sq'
    print Rainbow("Please enter the number: ").aqua
    num1 = gets.to_i
    puts Rainbow("="*80).magenta
    puts Rainbow("Sqare root of ").cyan + Rainbow("#{num1}").yellow + Rainbow(" is: ").cyan + Rainbow("#{Math.sqrt(num1)}").yellow.bright.underline
    puts Rainbow("="*80).magenta
  else
    print Rainbow("Please enter the first number: ").aqua
    num1 = gets.to_i
    print Rainbow("Please enter the second number: ").aqua
    num2 = gets.to_i
    math_operations(user_selection, num1, num2)
  end

  show_menu
  print Rainbow("Enter your menu selection: ").green
  user_selection = gets.chomp.downcase
end
