# print "Enter a binary number: "
# binary_num = gets.chomp()
# puts "Given number is : #{binary_num}"

# def is_valid_binary_num(binary_num)
# binary_num.each_char do |chr|
#   return 0 if(chr != '0' && chr != '1')
# end
# end
#
# valid_binary_num = is_valid_binary_num(binary_num)
#
#
# puts "Given number is : #{valid_binary_num}"
#
# def handshake(num)
#   commands = [];
#   case num
#   when '1'
#     commands.push("wink")
#   when '10'
#     commands.push("double blink")
#   when '100'
#     commands.push("close your eyes")
#   when '1000'
#     commands.push("jump")
#   when '10000'
#     commands.reverse()
#   end
#   commands
# end

# puts "#{handshake(valid_binary_num)}"

class SecretHandshake

  def is_valid_binary_num(binary_num)
    binary_num.each_char do |chr|
      return 0 if(chr != '0' && chr != '1')
    end
  end

  def initialize num
    if(is_valid_binary_num(num))
      @commands = []
      case num
      when '1'
        @commands.push("wink")
      when '10'
        @commands.push("double blink")
      when '100'
        @commands.push("close your eyes")
      when '1000'
        @commands.push("jump")
      when '10000'
        @commands.reverse()
      end
    end
  end

  def handshake
    @commands
  end

end

handshake = SecretHandshake.new "11001"
handshake.commands
