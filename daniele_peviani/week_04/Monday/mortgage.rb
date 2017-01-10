# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "Mortgage Calculator"

print "Insert the amount borrowed: "
amount = gets.to_i

print "Insert the interest rate: "
rate = gets.to_f

print "Insert the length of the loan in years: "
years = gets.to_i

effective_rate = (rate/100) / 12
repayments = years * 12
monthly_repayments = amount * ((effective_rate * ((1 + effective_rate) ** repayments)) / (((1 + effective_rate) ** repayments) -1))

owning = ((monthly_repayments * 12 * years) - amount).round

puts "The monthly repayments for the next #{years} years will be $#{monthly_repayments.round(2)}."
puts "You will have gifted the bank with $#{owning}."
