require 'rainbow'

print Rainbow("Enter distance of the trip in ").purple + Rainbow("miles : ").salmon
dist = gets.to_f

print Rainbow("Enter the speed of the vehicle in ").purple + Rainbow("miles per hour : ").salmon
speed = gets.to_f

print Rainbow("Enter fuel efficiency in ").purple + Rainbow("miles per gallon : ").salmon
eff = gets.to_f

print Rainbow("Enter cost of fuel in ").purple + Rainbow("price per gallon : ").salmon
price = gets.to_f

trip_time = dist / speed
trip_fuel = dist / eff
trip_cost = trip_fuel * price

puts Rainbow("Total trip time : ").orchid + Rainbow("#{trip_time}").turquoise.underline
puts Rainbow("Total fuel required for the trip in gallons : ").orchid + Rainbow("#{trip_fuel}").turquoise.underline
puts Rainbow("Total trip cost : ").orchid + Rainbow("#{trip_cost}").turquoise.underline
