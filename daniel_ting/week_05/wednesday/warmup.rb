def cipher(string)
  string.downcase.split("").each do |char|
    print (122 - (char.ord - 97)).chr
  end
  puts
end

cipher 'test'
cipher 'gvhg'
