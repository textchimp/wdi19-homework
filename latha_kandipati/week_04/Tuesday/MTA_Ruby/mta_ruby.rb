require 'rainbow'

def subway
  {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

print Rainbow("The line you are getting on: ").magenta
from_line = gets.chomp
print Rainbow("The stop you are getting on: ").magenta
from_stop = gets.chomp
print Rainbow("The line you are getting off: ").magenta
to_line = gets.chomp
print Rainbow("The stop you are getting off: ").magenta
to_stop = gets.chomp

if from_line == to_line && from_stop == to_stop
  puts Rainbow("Source and Destination are the same, you dont have to take a subwayfor this.").indianred
  exit
end

#Finding indexes of the source and destination stops and intersection
from_index = subway[from_line].index from_stop
to_index = subway[to_line].index to_stop
from_inter_index = subway[from_line].index "Union Square"
to_inter_index = subway[to_line].index "Union Square"
@stops = 0

def print_trip (line, from_index, to_index, reverse = false)
  puts Rainbow(subway[line][from_index..to_index].join(' --> ')).turquoise if !reverse
  puts Rainbow(subway[line][from_index..to_index].reverse.join(' --> ')).turquoise if reverse
  @stops += subway[line][from_index..to_index].count - 1
end

# If the to and from lines are same, thats easy
puts Rainbow("Route: ").yellow

if from_line == to_line
    if from_index < from_inter_index
      print_trip from_line, from_index, to_index
    else
      print_trip from_line, to_index, from_index, true
    end
else
  if from_index < from_inter_index
    print_trip from_line, from_index, from_inter_index
  else
    print_trip from_line, from_inter_index, from_index, true
  end
  if to_stop != "Union Square"
    puts Rainbow("Change the line here(Union Square), take line #{to_line}...").coral
    if to_inter_index < to_index
      print_trip to_line, to_inter_index, to_index
    else
      print_trip to_line, to_index, to_inter_index, true
    end
  end
end
puts Rainbow("Total #{@stops} number of stops").tomato
