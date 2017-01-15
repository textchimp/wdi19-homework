def mutation(strand1, strand2)
  distance = 0
  for i in 0..strand1.length-1
    if strand1[i] != strand2[i]
      distance += 1
    end
  end
  p distance
end

mutation('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')
