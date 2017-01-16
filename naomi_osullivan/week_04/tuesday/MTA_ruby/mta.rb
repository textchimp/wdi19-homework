#
def lines
{
  :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l => ["8th", "6th", "Union Square", "3rd", "1st"],
  :six => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
end

def plan_trip(start, finish) #one line one way
    deb = lines[:six].index start
    fin = lines[:six].index finish

    if deb < fin
      p stops = lines[:six][deb..fin]
      p stops.size
    else
      p rev = lines[:six][fin..deb].reverse
      p rev.size
    end

end



def plan_trip2(start, finish, line) # one line two ways
line = line.to_sym

    deb = lines[line].index start
    fin = lines[line].index finish


    if deb < fin
      p stops = lines[line][deb..fin]
      p stops.size
    else
      p rev = lines[line][fin..deb].reverse
      p rev.size
    end

end


def plan_trip3(line1, start, line2, finish) #multi-line
  line1 = line1.to_sym
  line2 = line2.to_sym

  deb = lines[line1].index start
  fin = lines[line2].index finish
  union_sq1 = lines[line1].index "Union Square"
  union_sq2 = lines[line2].index "Union Square"

  if line1 == line2 #does this work to call function like this in ruby???
    plan_trip2

  elsif line1 != line2
    # if deb < union_sq1
      p stops = lines[line1][deb..union_sq1]
      p stops.size
      p stops2 = lines[line2][union_sq2..fin]
      p stops2.size
    # else
    #   p rev = lines[line1][deb..union_sq1]
    #   p rev.size
    #   p rev2 = lines[line2][union_sq2..fin]
    #   p rev2.size
  end


end








#
# p lines[:six]
# # start = "33rd"
# # finish = "Union Square"
# p lines[:six][1..4]
#


 # six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

# def plan_trip(start, finish)
#   deb = six.index start
#   fin = six.index finish
#   puts "You start at #{deb} and finish at #{fin}"
#
# end
#
# plan_trip "33rd", "23rd"
# puts six
#
# six.index "33rd
# def list_of_stops
#   puts six
# end
#
# list_of_stops



require 'pry'
binding.pry
