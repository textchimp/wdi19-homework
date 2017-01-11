
require 'rainbow'

def show_menu
  puts Rainbow("-"*80).blue
  puts Rainbow("Trip Calculator").blue
  puts Rainbow("-"*80).blue
  puts "[s]- start"
  puts "[q] - quit"
  print "Enter your menu selection: "
end

show_menu
selection= gets.chomp

until selection == 'q'
  if selection == 's'
    print "Distance (miles)? : "
    distance = gets.to_f

    print "Miles per Gallon? : "
    miles_per_gallon = gets.to_f

    print "Price per Gallon ($)? : "
    price_per_gallon = gets.to_f

    print "Speed (miles per hour)? : "
    speed = gets.to_f

    trip_time = distance/speed
    trip_time = trip_time.round(2)
    cost = (distance / miles_per_gallon) * price_per_gallon
    cost = cost.round(2)

    puts Rainbow("Total trip time: #{trip_time} hours").magenta
    puts Rainbow("Total cost: $#{cost}").magenta
    show_menu
    selection= gets.chomp

  else
    puts "Invalid selection"
    show_menu
    selection= gets.chomp
  end
end

puts "Thanks for using the trip calculator"
