# dna1 = "GAGCCTACTAACGGGAT"
# dna2 = "CATCGTAATGACGGCCT"

class DNA
  # attr_accessor dna
  @hamming_distance = 0
  def initialize(str1)
    @dna = str1
  end

  def find_hamming_distance(dna2)
    @dna.chars.each_with_index do |chr, i|
      if chr != dna2[i]
        @hamming_distance += 1;
      end
    end
  end
  @hamming_distance
end

str1 = DNA.new("GAGCCTACTAACGGGAT")
str2 = DNA.new("CATCGTAATGACGGCCT")
puts "Hamming distance between #{str1} and #{str2} is: #{str1.find_hamming_distance(str2)}"
