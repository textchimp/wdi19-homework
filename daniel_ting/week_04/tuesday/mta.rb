def plan_trip (srcLine, srcStation, dstLine, dstStation)
  lines = {
    'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
  s = lines[srcLine]
  d = lines[dstLine]
  listOfStations_l1 = []
  listOfStations_l2 = []
  if srcLine == dstLine
    s.reverse! if s.index(dstStation) < s.index(srcStation)
    for i in s.index(srcStation)+1..s.index(dstStation)
      listOfStations_l1.push(s[i])
    end
    puts "Your must travel through the following stops on the #{srcLine} line: #{listOfStations_l1.join(', ')}."
    puts "#{listOfStations_l1.length} stops in total."
  else
    s.reverse! if s.index('Union Square') < s.index(srcStation)
    d.reverse! if d.index('Union Square') > d.index(dstStation)
    for i in s.index(srcStation)+1..s.index('Union Square')
      listOfStations_l1.push(s[i]);
    end
    for i in d.index('Union Square')..d.index(dstStation)
      listOfStations_l2.push(d[i]);
    end
    puts "Your must travel through the following stops on the #{srcLine} line: #{listOfStations_l1.join(', ')}."
    puts "Change at Union Square."
    puts "Your journey continues through the following stops: #{listOfStations_l2.join(', ')}."
    puts "#{listOfStations_l1.length + listOfStations_l2.length} stops in total."
  end
end

plan_trip 'N', 'Times Square', '6', '33rd'
