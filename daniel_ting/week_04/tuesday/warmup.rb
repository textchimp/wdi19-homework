print "Enter a number : "
num = gets.to_i

s = ""
if num % 7 == 0
  s += "Plong"
end
if num % 5 == 0
  s += "Plang"
end
if num % 3 == 0
  s += "Pling"
end
if s.length == 0
  puts num
else
  puts s
end
