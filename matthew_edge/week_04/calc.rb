# show menu
def show_menu
  puts "Welcome to Super Calculatortron 4000"
  puts "*" * 80
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[x] - Multiply"
  puts "[p] - Power of"
  puts "[r] - Square Root"
  puts "[q] - Quit"
  print "Enter selction : "
end

show_menu

# get choice
user_selection = gets.chomp.downcase

until user_selection == 'q'
  case user_selection
  when 'a'
    print "Welcome to Addition Bot 2K! Please input number to begin addition : "
    a = gets.to_i
    print "#{a}. Great, what would you like to add to it? : "
    b = gets.to_i
    puts "Too easy, #{a} + #{b} = #{a+b}"
  when 's'
    print "Subtraction time! Input first number to begin : "
    a = gets.to_i
    print "#{a}. Great, what should we subtract from #{a}?"
    b = gets.to_i
    puts "Simple #{a} - #{b} = #{a-b}"
  when 'x'
    print "Lets go forth and multiply! Enter first number : "
    a= gets.to_i
    print "#{a} multiply by? : "
    b= gets.to_i
    print "#{a} x #{b} = #{a * b}\n"
  when 'p'
    print "Power time. Let me know what you would like to find : "
    a = gets.to_i
    print "#{a} to the power of? : "
    b = gets.to_i
    print "#{a} to the power of #{b} = #{a**b}\n"
  when 'r'
    print "Let's do some square rooting mate. What number would you like to find the root of? "
    a = gets.to_i
    print "The square root of #{a} is #{Math.sqrt(a)}\n"
  else
    puts "invalid input"
  end
  puts "*" * 80
  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using me"
# loop , until user choice = "q"
# do some operation
#show menu
# get choice again
# end
#Calculator should be able to do basic arithmetic (+,-, *, /)
