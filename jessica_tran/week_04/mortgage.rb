
require 'rainbow'

def show_menu
  puts Rainbow("-"*80).blue
  puts Rainbow("Mortgage Calculator").blue
  puts Rainbow("-"*80).blue
  puts "[s]- start"
  puts "[q] - quit"
  print "Enter your menu selection: "
end

show_menu
selection= gets.chomp

until selection == 'q'
  if selection == 's'
    print "Initial amount of the loan (Principal)? : "
    principal = gets.to_f

    print "Annual interest rate (%)? : "
    interest_rate = gets.to_f
    monthly_interest_rate = interest_rate/(12*100)

    print "Length of the loan (years)? : "
    length = gets.to_f
    length_months = length * 12

    monthly_repayments = principal * (monthly_interest_rate/(1-(1+monthly_interest_rate) ** -length_months))
    monthly_repayments = monthly_repayments.round(2)

    puts Rainbow("Monthly repayment: $#{monthly_repayments}").cyan
    show_menu
    selection= gets.chomp

  else
    puts "Invalid selection"
    show_menu
    selection= gets.chomp
  end
end

puts "Thanks for using the mortgage calculator"
