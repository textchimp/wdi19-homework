def score(word)
  s = 0
  word.upcase.each_char { |letter|
    case letter
    when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'
      s+=1
    when 'D', 'G'
      s+=2
    when 'B', 'C', 'M', 'P'
      s+=3
    when 'F', 'H', 'V', 'M', 'Y'
      s+=4
    when 'K'
      s+=5
    when 'J', 'X'
      s+=8
    when 'Q', 'Z'
      s+=10
    end
  }
  puts s
end

score 'cabbage'
