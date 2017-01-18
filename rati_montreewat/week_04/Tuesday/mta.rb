require 'pry'
require 'pry-nav'

$alllines2 = {"line_n" => ["Times Square", "34th_n", "28th_n", "23rd_n", "Union Square", "8th_n"],
        "line_l" => ["8th_l", "6th_l", "Union Square", "3rd_l", "1st_l"],
        "line_6" => ["Grand Central", "33rd_6", "28th_6", "23rd_6", "Union Square", "Astor Place"] }

$alllines ={"bts_sukumvit" => [ "mochit", "saphankhai", "ari", "sanampao", "victorymoment", "phayathai", "ratchathewi", "siam", "chitlom", "phloenchit", "nana", "sukhumwit", "asok", "phromphong", "thonglo", "ekkamai", "phrakhanong"],
        "bts_silom" => [ "nationalstadium", "siam", "ratchadamri", "saladaeng", "silom", "chongnonsi", "surasak", "sapantaksin", "krungthonburi", "wongwianyai"],
        "mrt" => ["hualamphong", "samyan", "silom", "lumphini", "klongtoei", "qsncc", "sukhumwit", "makkasan", "phraram9", "thailandculturalcentre", "huaikhang", "sutthisan", "ratchdaphisek", "latphrao", "phahonyothin", "mochit", "kamphaengphet", "bangsue"],
        "arl" => ["phayathai", "ratchaprarop", "makkasan", "ramkhamhaeng", "huamak", "banthapchang", "latkrabang", "suvarnabhumiairport"] }

# bts_sukumvit phayathai mrt lumphini


def show_menu
  puts "MTA"
  puts "-" * 80
  puts "[q] - Quit  [s] - start "

end

show_menu
user_selection = gets.chomp

until user_selection == 'q'
  case user_selection
  when 's'
    puts "Enter line a user is getting on"
    $lineon = gets.chomp
    puts "Enter stop a user is getting on"
    $stopon = gets.chomp
    puts "Enter line a user is getting off"
    $lineoff = gets.chomp
    puts "Enter stop a user is getting off"
    $stopoff = gets.chomp
  else
    puts "Invalid selection"
  end

  # $lineon = "line_n"
  # $stopon = "Union Square"
  # $lineoff = "line_6"
  # $stopoff = "Grand Central"

  # path -> path or false
  # Arrayof path -> false or Arr
  def find_path(path)
    # binding.pry
    if isdest(path)
      path
    else
      find_arr_path(nextcase(path))
    end
  end

  def find_arr_path(arr)
    # binding.pry
    if arr == false or arr.length == 0
      return false
    else
      try = find_path(arr.first)
      if try != false
        return try
      else
        arr.shift
        return find_arr_path(arr)
      end
    end
  end

  # path -> boolean
  def isdest(path)
    if path == false or path.last == $stopoff
    # if path == false
      return true
    else
      return false
    end
  end

  # arrayofpath -> arrayofpath
  def keeponlyvalid( arr)
    # binding.pry
    store = []
    arr.each do |x|
      # check if duplicate
      if x.uniq.length == x.length
        store.push(x)
      end
    end
    return store.uniq
  end

  # path, arrayofline -> arrayofpath
  def fillwithvals(path, arr)
    # binding.pry
      store = []
      arr.each do |item|
        # puts "item: #{item}"
        if isinterchange(path.last)
          sindex = $alllines[item].index(path.last)
          sindexf = (sindex+1 if sindex+1 <= $alllines[item].length-1)|| sindex
          sindexr = (sindex-1 if sindex-1 >= 0)|| sindex
          store.push(path.dup.push($alllines[item][sindexf]))
          store.push(path.dup.push($alllines[item][sindexr]))
        else
          sindex = $alllines[currentline(path)].index(path.last)
          sindexf = (sindex+1 if sindex+1 <= $alllines[currentline(path)].length-1)|| sindex
          sindexr = (sindex-1 if sindex-1 >= 0 )|| sindex
          store.push(path.dup.push($alllines[currentline(path)][sindexf])).select! { |x| !x.nil? } if sindexf != sindex
          store.push(path.dup.push($alllines[currentline(path)][sindexr])).select! { |x| !x.nil? } if sindexr != sindex
        end
      end
    return store
  end

#path -> line
  def currentline(path)
    # binding.pry
    $alllines.each_pair do |key,val|
      $alllines[key].each do |x|
        if x == path.last
          return key
        end
      end
    end
  end

#string -> boolean
  def isinterchange(str)
    # binding.pry
    store = []
    $alllines.each_pair do |key,val|
      store.concat(val)
    end
    # return duplicate element
    dupli = store.group_by {|e| e}.map { |e| e[0] if e[1][1]}.compact
    dupli.each do |x|
      if str == x
        return true
      end
    end
    return false
  end

  # path -> arrayofline
  def findlines(path)
    # binding.pry
    store = [currentline(path)]
    if isinterchange(path.last)
      $alllines.each do |key, value|
        if value.include? path.last
          store.push(key)
        end
      end
    end
    return store.uniq
  end

  # path -> arrayofpath
  def nextcase(path)
    return keeponlyvalid(fillwithvals(path, findlines(path)))
  end

  path = [$stopon]
  journey_all = find_path(path)

  def displayj(journey_all)
    # binding.pry
    if journey_all == false
      puts "You misspell !"
    else
      num = journey_all.length
      store = []
      if $lineon == $lineoff
        journey_all.each do |x|
          store.push(x)
        end
        puts "You must travel through the following stops on the  #{store.join(", ")}"
      else
        journey_all.each do |i|
          unless isinterchange(i)
            store.push(i)
          else isinterchange(i)
            puts "You must travel through the following stops on the  #{store.push(i).join(", ")}"
            puts "Change at #{i}."
            store = []
          end
        end
        puts "Your journey continues through the following stops: #{store.join(", ")}"
      end
      puts "#{num} stops in total"
    end
  end


  displayj(find_path(path))

  show_menu
  user_selection = gets.chomp.downcase
end
