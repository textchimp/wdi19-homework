print "Enter string: "
str = gets.chomp.upcase
puts "You have entered: #{str}"
nucleotide_history = {"A" => 0, "C" => 0, "G" => 0, "T" => 0}
str.each_char do |chr|
  if nucleotide_history.include? chr
    nucleotide_history[chr] += 1
  else
    puts "#{chr} is not a valid nucleotide"
  end
end
p nucleotide_history
