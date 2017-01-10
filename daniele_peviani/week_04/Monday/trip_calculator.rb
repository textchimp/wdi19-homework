# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts "Trip Calculator"

print "Please enter the distance in km: "
distance = gets.to_i

print "Please enter the kms per litre: "
kms_litre = gets.to_f.round(1)

print "Please enter the price per litre: "
price_litre = gets.to_f.round(2)

print "Please enter the average kms per hour: "
speed = gets.to_i

total_litres = distance / kms_litre

trip_cost = total_litres * price_litre
trip_time = distance / speed

puts "The trip will take #{trip_time} hours and it will cost you $#{trip_cost.round(1)}"
