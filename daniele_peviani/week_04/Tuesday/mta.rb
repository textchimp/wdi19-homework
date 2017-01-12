# Title: MTA Lab
#
# Activity:
#
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

@lines ={"N" => "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(', '),
         "L" => "8th, 6th, Union Square, 3rd, 1st".split(', '),
         "6" => "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(', ')}
@total_stops = 0

def calculate_trip (line_a, stop_a, line_b, stop_b)
  if !(@lines.keys.include? line_a) | !(@lines.keys.include? line_b) | !(@lines[line_a].include? stop_a) | !(@lines[line_b].include? stop_b)
    puts "Line/stop not found"
    exit
  end

  start_line = @lines[line_a]
  end_line = @lines[line_b]

  start_index = start_line.index(stop_a)
  if line_a == line_b
    end_index = end_line.index(stop_b)
  else
    end_index = start_line.index("Union Square")
  end

  puts "You must travel through the following stops on the #{line_a} line: #{get_stops(start_line, start_index, end_index)}."

  if line_a != line_b
    puts "Change at Union Square."
    start_index = end_line.index("Union Square")
    end_index = end_line.index(stop_b)

    puts "Your journey continues through the following stops: #{get_stops(end_line, start_index, end_index)}."
  end

  puts "#{@total_stops} stops in total."
end

def get_stops(line, start_index, end_index)
  if start_index > end_index
    stops = line.slice(end_index..start_index - 1).reverse
  else
    stops = line.slice(start_index + 1..end_index)
  end
  @total_stops += stops.size
  stops.join(', ')
end

puts "\n" + @lines.keys.join('    ')
print "Select the line you're getting on: "
line_a = gets.chomp

puts "\n" + @lines[line_a].join('    ')
print "Select the stop you're getting on: "
stop_a = gets.chomp

puts "\n" + @lines.keys.join('    ')
print "Select the line you're getting off: "
line_b = gets.chomp

puts "\n" + @lines[line_b].join('    ')
print "Select the stop you're getting off: "
stop_b = gets.chomp

calculate_trip line_a, stop_a, line_b, stop_b
