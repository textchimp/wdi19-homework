require 'rainbow'
def menu
  puts "-" * 80
  puts Rainbow("Arithmetic Two Number Calculator").green.bright
  puts "-" * 80
  puts "Please enter your operation as you would on a normal calculator"
  puts "[x + y] to sum"
  puts "[x - y] to rest"
  puts "[x / y] to divide"
  puts "[x % y] to modulo"
  puts "[x ** y] to exponent"
  puts "[sqrt x] to square root"
  puts "[q] to quit"
  puts ""
end

def float_or_int(op)
  if op.include? "."
    op.to_f
  else
    op.to_i
  end
end

at_exit do
  puts 'GoodBye! Thanks for using this small program'
end

menu
while true do
  print '>> '
  operation = gets.chomp.split(" ")
  # Operation is an array with the form ["x", "+", "y"]
  if operation.length == 3
    operand1 = float_or_int(operation[0])
    operand2 = float_or_int(operation[2])
    operator = operation[1].to_sym
  # Operation is an array with the form ["sqrt", "x"]
  elsif operation.length == 2
    operand1 = float_or_int(operation[1])
    operator = operation[0].to_sym
  else
    puts "Invalid input"
    menu
  end

  exit if operation[0] == 'q'
  case operator
  when :+ then puts Rainbow(operand1 + operand2).blue
  when :- then puts Rainbow(operand1 - operand2).blue
  when :/ then puts Rainbow(operand1 / operand2).blue  
  when :% then puts Rainbow(operand1 % operand2).blue
  when :** then puts Rainbow(operand1 ** operand2).blue
  when :sqrt then puts Rainbow(Math.sqrt(operand1)).blue  
  else
    puts Rainbow("Invalid input, try again:").red
  end
end

