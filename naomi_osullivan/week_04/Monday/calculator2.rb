# show menu
def show_menu
  puts "Calculator"
  puts "-" * 80
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[q] - Quit"
  puts "Enter your menu selection: "

end

show_menu


#get the user menu choice
user_selection = gets.chomp.downcase



until user_selection == 'q'
  case user_selection
  when 'a'
    puts "Enter the numbers you wish to add seperated by a space"
    add = gets.split
    puts add

    sum = 0
    add.each { |a| sum += a}
    puts sum
  when 's'
    print "Enter first number : "
    x = gets.to_f
    print "Enter second number : "
    y = gets.to_f
    result = x - y
    puts "#{x} - #{y} = #{result}"
  when 'm'
    print "Enter first number : "
    x = gets.to_f
    print "Enter second number : "
    y = gets.to_f
    result = x * y
    puts "#{x} * #{y} = #{result}"
  when 'd'
    print "Enter first number : "
    x = gets.to_f
    print "Enter second number : "
    y = gets.to_f
    result = x / y
    puts "#{x} / #{y} = #{result}"

  else
    puts "Invalid selection"


  end
show_menu
user_selection = gets.chomp.downcase
#get the user menu choice
end

puts "Thank you for using the crappy calculator."
