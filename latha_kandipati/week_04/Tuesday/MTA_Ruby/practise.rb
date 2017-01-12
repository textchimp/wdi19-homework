def longest_consec(strarr, k)
    # your code
    return "" if strarr.count == 0 || k > strarr.count || k <= 0
    counts = {}
    str = ""
    strarr.group_by(&:itself).each do |key,v|
      counts[key] = v.count
      if v.count == k
        str += v[0]
      end
    end
    p strarr
    p counts
    p str
    # counts.each do |k,v| {}
end
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
# longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
# testing(longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")

def filter_list(l)
  # return a new list with the strings filtered out
  p l.select{|n| n.is_a? Integer }
end
filter_list [1,2,'aasf','1','123',123]

def disemvowel(str)
  p str.delete 'aeiouAEIOU'
end
disemvowel "This website is for losers LOL!"

def comp(array1, array2)
  res = true
  p array1
  p array2
  if array1.empty? || array2.empty?
    res = false
  elsif array1.nil? || array2.nil?
    res = false
  elsif array1.none? || array2.none?
    res = false
  elsif array1.count != array2.count
    res = false
  end
  temp1 = array1.sort
  temp2 = array2.sort
  p "Res: #{res}"
  if res
    (0..temp1.count-1).each do |i|
      if (temp1[i]*temp1[i]) != temp2[i]
        res = false
      end
    end
  end
  p res
end
# comp( [121, 144, 19, 161, 19, 144, 19, 11],
#        [11*12, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])
       comp [121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]
       comp [121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
       comp [121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]
       comp [121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
       comp [2,2,3], [4,9,9]
