# global variable assigned with @. could put in function
@subway = {
    "N" => ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
    "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# Method of single line journey
def trip(line, from, to)
  line = @subway[line]
  from_index = line.index(from)
  to_index = line.index(to)

  if from_index < to_index
    line[from_index..to_index]
  else # opposite direction
    line[to_index..from_index].reverse
  end
end

def plan_trip(from_line, from_station, to_line, to_station)
  if from_line == to_line #single line trip
    print "You must travel through the following stops on the #{ from_line } line: "
    stops = trip(from_line, from_station, to_station)
    puts stops.join(", ")
    puts "#{ stops.length - 1} stops in total."
  else #different line
    print "You must travel through the following stops on the #{ from_line } line: "
    before_transfer = trip(from_line, from_station, "Union Square")
    puts before_transfer.join(", ")
    puts "Change at Union Square to #{ to_line } line."
    print "Your journey continues through the following stops: "
    after_transfer = trip(to_line, "Union Square", to_station)[1..-1]
    puts after_transfer.join(", ")
    puts "#{ before_transfer.length + after_transfer.length - 1 } stops in total."
  end
end

plan_trip("N", "Time Square", "N", "8th")
plan_trip("6", "33rd", "N", "Time Square")
