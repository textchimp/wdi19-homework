
def count_nucleotides( string )

  bases = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0
  }

  message = []

  # iterate over each character of the input string
  string.upcase.chars.each do |letter|

    # this variable is a flag which lets us keep track of whether we found any matching bases or not
    is_nucleotide = false

    bases.each do |key, value|
      if letter == key
        bases[ key ] += 1
        is_nucleotide = true
      end
    end # bases.each

    unless is_nucleotide
      message.push "#{letter} is not a valid nucleotide"
    end

  end   # string.chars.each

  bases.each do |key, value|
    message.push "#{ key }: #{ value }" if value > 0
  end

  message  # implicit return of message array
end


result = count_nucleotides "atgxggapt"
result.each{ |line| puts line }
