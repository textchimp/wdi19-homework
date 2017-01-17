$lines = {"n" => ['8th','Union Square', "23rd", '28th', '34th'],
         "l" => ['8th', '6th', 'Union Square', '3rd', '1st'],
         "s" => ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']}

trip_stops = []
one_line = false

def total_trip(a, start_station, e, end_station)
  start = $lines[a].index(start_station)
  start_union = $lines[a].index("Union Square")
  finish = $lines[e].index(end_station)
  finish_union = $lines[e].index("Union Square")
  if start > start_union
    trip_stops += $lines[a][start_union.to_i..start.to_i]
  end
  if start < start_union
    puts "BLAMMY"
  require "pry"
  binding.pry
  end



end

total_trip "n", "38th", "n", "3rd"
