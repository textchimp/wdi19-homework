require 'rainbow'
def menu
  puts "-" * 80
  puts "Comparison Calculator"
  puts "-" * 80
  puts "Please enter two things to compare with Ruby"
  puts "[x == y] to compare equality"
  puts "[x != y] to compare inequality"
  puts "[x > y] value of left greater than value of right"
  puts "[x < y] value of right greater than value of left"
  puts "[x >= y] value of left greater or equal than value of right"
  puts "[x <= y] value of right greater or equal than value of left"
  puts "[x <=> y] return 0 if first equals second, 1 if first is greater than second and -1 if first is less than second"
  puts "[x === y] to test equality within a when clause of a case statement"
  puts "[q] to quit"
  puts ""
end

at_exit do
  puts 'GoodBye! Thanks for using this small program'
end

menu
while true do
  print '>> '
  operation = gets.chomp.split(" ")
  # Operation is an array with the form ["x", "==", "y"]
  if operation.length == 3
    operand1 = operation[0]
    operand2 = operation[2]
    operator = operation[1].to_sym
  else
    puts Rainbow("Invalid input, try again").red
  end

  exit if operation[0] == 'q'
  case operator
  when :== then puts Rainbow(operand1 == operand2).blue
  when :!= then puts Rainbow(operand1 != operand2).blue
  when :> then puts Rainbow(operand1 > operand2).blue
  when :< then puts Rainbow(operand1 < operand2).blue
  when :>= then puts Rainbow(operand1 >= operand2).blue
  when :<= then puts Rainbow(operand1 <= operand2).blue
  when :<=> then puts Rainbow(operand1 <=> operand2).blue
  when :=== then puts Rainbow(operand1 === operand2).blue
  end
end

