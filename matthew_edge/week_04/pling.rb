# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'. If the number contains 5 as a factor, output 'Plang'. If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the string representation of the number itself.
#
# E.g.
#
# The number 28 is divisible by 7, so...
#
# # => "Plong"
# The number 1755 is divisible by 3 and 5, so...
#
# # => "PlingPlang"
# The number 34 is not divisible by 3,5 or 7, so...
#
# # => "34"

puts "Welcome to Pling Plang Plong. The worlds least exciting game."
puts "*" * 80
print "Give us a number bro : "
answer = ""
input = gets.to_i
if input % 3 == 0
  answer += "Pling" end
if input % 5 == 0
  answer += "Plang" end
if input % 7 == 0
  answer += "Plong" end
if answer == ""
  answer = input end
puts answer
