
@roman_map = {
  1000 => 'M',
  900 => 'CM',
  500 => 'D',
  400 => 'CD',
  100 => 'C',
  90 => 'XC',
  50 => 'L',
  40 => 'XL',
  10 => 'X',
  9 => 'IX',
  5 => 'V',
  4 => 'IV',
  1 => 'I'
}

def to_roman( number )

  result = ""

  @roman_map.each do |key, value|

    puts "EACH: #{key} => #{value}, number #{number}"

    # don't even run the while loop if our number is smaller than the current key
    while number >= key
      result += value
      puts "WHILE: #{number} >= #{key}, so add #{value} to result; new result = #{result}"
      puts "WHILE: number -= key: #{number} - #{key} = #{number - key}"
      number -= key
    end

  end #each roman numeral

  result  # implicit return of our final result variable
end

puts to_roman 317
