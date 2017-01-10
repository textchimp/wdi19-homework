print "Enter a number or [0] to quit: "
num = gets.to_i

until num == 0
  str = ''
  if num % 3 == 0
    str += "Pling"
  end
  if num % 5 == 0
    str += "Plang"
  end
  if num % 7 == 0
    str << "Plong"
  end
  # if str.empty?
  if str == ''
    puts num
  else
    puts str
  end
  print "Enter a number or [0] to quit: "
  num = gets.to_i
end
