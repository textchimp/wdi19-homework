def counter(string)
  count = { 'A'=> 0, 'C'=> 0, 'G'=> 0, 'T'=>0 }
  string.upcase.each_char { |chr| count.key?(chr) ? count[chr] += 1 : puts( "#{chr} is not valid." )  }
end

counter('acgahacg')
