def plan_trip (line1, stop1, line2, stop2)

  #display user's intended trip
  puts "Start: #{line1} line, #{stop1} stop"
  puts "Finish: #{line2} line, #{stop2} stop"

  subway = {
    "N" =>["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" =>["8th", "6th", "Union Square", "3rd", "1st"],
    "6" =>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  };

  stop_list=[]
  stop_list2=[]
  stop1_index = subway[line1].index stop1
  stop2_index = subway[line2].index stop2

  #same line trip
  if line1 == line2
    if stop1_index < stop2_index
      stop_list = subway[line1][stop1_index..stop2_index]
      stop_list.shift
    elsif stop1_index > stop2_index
      stop_list = subway[line1][stop2_index..stop1_index].reverse
      stop_list.shift
    else
      puts "You are where you want to be!"
    end
  end

  #different line trip
  if line1 != line2
    unionsquare_index1 = subway[line1].index 'Union Square'
    unionsquare_index2 = subway[line2].index 'Union Square'
    if stop1_index < unionsquare_index1
      stop_list = subway[line1][stop1_index..unionsquare_index1]
    else
      stop_list = subway[line1][unionsquare_index1..stop1_index].reverse
    end
    if stop2_index > unionsquare_index2
      stop_list2 = subway[line2][unionsquare_index2..stop2_index]
    else
      stop_list2 = subway[line2][stop2_index..unionsquare_index2].reverse
    end
    stop_list.shift
    stop_list2.shift
  end

  #number of stops
  number_of_stops = stop_list.length + stop_list2.length

  #print to screen
  if line1 == line2 && stop1 != stop2
    puts "You must travel through the following stops on the #{line1} line: "
    p stop_list
  elsif line1 != line2
    p stop_list
    puts "Change at Union Square. Your journey continues through the following stops on the #{line2} line: "
    p stop_list2
  end
  puts "#{number_of_stops} stops in total."
  puts "-" * 80

end

# require 'pry'; binding.pry
plan_trip 'N','8th', 'N', '34th'
plan_trip 'N','34th', 'N', '8th'
plan_trip 'N','Times Square', '6', '33rd'
plan_trip 'L','1st', 'N', '8th'
plan_trip 'L','1st', 'L', '1st'
