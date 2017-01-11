rn = rand(0..10)
print "input a number : "
answer = gets.to_i

until rn == answer
  print "guess again : "
  answer = gets.to_i
end

puts "Congrats"
