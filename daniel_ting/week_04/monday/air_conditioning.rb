functional = true
temperature = 30
desired_temp = 25

if functional && temperature > desired_temp
  puts "Turn on the A/C Please"
elsif !functional && temperature > desired_temp
  puts "Fix the A/C now! It's hot!"
elsif !functional && temperature < desired_temp
  puts "Fix the A/C whenever you have the chance... It's cool..."
end
