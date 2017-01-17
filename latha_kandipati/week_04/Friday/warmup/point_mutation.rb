puts "This program calculates the hamming distance between two homologous DNAs"
print "Enter DNA1: "
# dna1 = gets.chomp
dna1 = "GAGCCTACTAACGGGAT"
print "Enter DNA2: "
# dna2 = gets.chomp
dna2 = "CATCGTAATGACGGCCT"
hamming_distance = 0

for i in 0..dna1.length
  if dna1[i] != dna2[i]
    hamming_distance += 1
  end
end

puts "Hamming distance between '#{dna1}' and '#{dna2}' is : #{hamming_distance}"
