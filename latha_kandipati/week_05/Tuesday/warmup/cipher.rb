
$plain = Array('a'..'z') #('a'..'z').to_a
$cipher = $plain.reverse

class PlainText

  attr_accessor :str

  def initialize
    @str = "test"
    @encoded_str = ''
    @decoded_str = ''
  end

  def show
    puts "Plain text: #{@str}"
    puts "Encoded text: #{@encoded_str}"
    puts "Decoded text: #{@decoded_str}"
  end

  def encode
    @str.each_char do |chr|
      @encoded_str += $cipher[$plain.index(chr)]   #encoded_str <<$cipher[$plain.index(chr)]
    end
    @encoded_str
  end

  def decode
    @encoded_str.each_char do |chr|
      @decoded_str += $plain[$cipher.index(chr)]
    end
    @decoded_str
  end

end

my_text = PlainText.new
my_text.encode
my_text.decode
my_text.show

print "Enter your string to be encoded: "
input_str = gets.chomp.downcase
new_text = PlainText.new
new_text.str = input_str
new_text.encode
new_text.decode
new_text.show
