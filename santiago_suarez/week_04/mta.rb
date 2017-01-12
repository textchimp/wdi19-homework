require "rainbow"
@lines = { n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
          l: ["8th", "6th", "Union Square", "3rd", "1st"],
          "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"] }

def plan_trip(o_line, o_station, e_line, e_station)
  @start_line = @lines[o_line.to_sym]
  @end_line = @lines[e_line.to_sym]
  @start_index = @start_line.index(o_station)
  @end_index = @end_line.index(e_station)

  if @start_line == @end_line
    results_arr = same_line_trip
    print_simple(results_arr, o_line)
  else
    results_arr = multi_trip
    print_multi(results_arr, o_line, e_line)
  end
end

def multi_trip
  [to_union(@start_line)] + [from_union(@end_line)]
end

def same_line_trip
  same_station?
  select_from_line(@start_line, @start_index, @end_index)
end

def to_union(line)
  uIndex = line.index("Union Square")
  select_from_line(line, @start_index, uIndex)
end

def from_union(line)
  uIndex = line.index("Union Square")
  select_from_line(line, uIndex, @end_index)
end

def same_station?
  if @start_index == @end_index
    puts "You ain't moving anywhere :D, try again:"
  end
end

def select_from_line(line, start, finish)
  res = line.select.with_index do |e, i|
    # http://stackoverflow.com/questions/4467538/what-does-the-operator-do-in-ruby
    (start..finish) === i || (finish..start) === i
  end
  start < finish ? res : res.reverse
end

def print_simple(results_array, first_line)
  print "You must travel through the following stops on the #{first_line.capitalize} line:
    #{results_array.join(", ")}
    #{results_array.size - 1} stops in total."
end

def print_multi(results_array, first_line, end_line)
  print "You must travel through the following stops on the #{first_line.capitalize} line:
    #{results_array[0].join(", ")}
    Change in Union Square and continue through:
    #{results_array[1].join(", ")}
    #{(results_array[0].size + results_array[1].size) - 2} stops in total."
end

# User interface
def menu
  puts "-" * 80
  puts Rainbow("MTA").green.bright
  puts Rainbow("N ").red  + Rainbow("line stations are: " + @lines[:n].join(", ")).cyan
  puts Rainbow("L ").yellow + Rainbow("line stations are: " + @lines[:l].join(", ")).magenta
  puts Rainbow("6 ").green + Rainbow("line stations are: " + @lines[:"6"].join(", ")).hotpink
  puts "-" * 80
  print Rainbow("Please enter your starting line: ").blue

  s = gets.chomp.downcase

  print Rainbow("Please enter your starting station: ").blue

  x = gets.chomp.split(" ").map(&:downcase).map(&:capitalize).join(" ")

  print Rainbow("Please enter your destination line: ").blue

  y = gets.chomp.downcase

  print Rainbow("Please enter your destination station: ").blue

  d = gets.chomp.split(" ").map(&:downcase).map(&:capitalize).join(" ")

  plan_trip(s,x,y,d)
end

menu
