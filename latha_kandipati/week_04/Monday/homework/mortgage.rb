require 'rainbow'
print Rainbow("Enter the principal / loan amount: ").deepskyblue
loan = gets.to_f

print Rainbow("Enter the annual interest rate: ").deepskyblue
annual_rate = gets.to_f
monthly_rate = (annual_rate / 100 ) / 12

print Rainbow("Enter the loan period ").deepskyblue + Rainbow("in years: ").lightcoral
loan_per = gets.to_i
nper = loan_per * 12 # calculating number of monthly payments.

eval1 = ( 1 + monthly_rate ) ** nper
emi = ( (monthly_rate * eval1) / (eval1 - 1) ) * loan

puts Rainbow("Your principal loan amount: ").royalblue + Rainbow("#{loan}").powderblue.bright.underline
puts Rainbow("Your monthly interest rate: ").royalblue + Rainbow("#{monthly_rate}").powderblue.bright.underline
puts Rainbow("Your loan duration in months: ").royalblue + Rainbow("#{nper}").powderblue.bright.underline
puts Rainbow("Your monthly EMI: ").royalblue + Rainbow("#{emi}").powderblue.bright.underline
