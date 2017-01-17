def macAddress
              ["00:0a:95:9d:68:16",
               "00:0a:95:9d:68:17",
               "00:0a:95:9d:68:18",
               "00:0a:95:9d:68:19",
               "00:0a:95:9d:68:20",
               "00:0a:95:9d:68:21",
               "00:0a:95:9d:68:22",
               "00:0a:95:9d:68:23",
               "00:0a:95:9d:68:24",
               "00:0a:95:9d:68:25",
               "00:0a:95:9d:68:26"]
end

$names = {"RX211" => false,
         "SD823" => false,
         "KL223" => false,
         "IK678" => false,
         "KJ348" => false,
         "SH728" => false,
         "BV729" => false}

class Robot

  def initialize

    @mac = macAddress.sample
    macAddress.delete(@mac)

    generate_name
    @created_time = Time.now

  end

  def generate_name

    $names.each do |name,in_use|
      if !in_use
        @my_name = name
      end
    end
    @cntr = 0

  end

  def name

    @cntr = @cntr + 1
    if @cntr == 2
      $names[@my_name] = true
      @cntr = 0
    end
    @my_name

  end

  def show
    puts "My mac: #{@mac}"
    puts "My name:  #{@my_name}"
    puts "Name counter: #{@cntr}"
    puts "Created at #{@created_time}"
  end

  def reset
    @cntr = 0
    generate_name
    $names[@my_name] = false
    puts "Resetting to factory settings ..."
  end

  def timers
    # @instruction_count +=  1
    @time_since_created = Time.now.sec - @created_time.sec
    puts "#{@my_name} was created #{@time_since_created} since ago"
  end

end
# p @macAddress.sample
robot1 = Robot.new
robot1.name
robot1.name
robot1.show
robot1.reset
robot1.show
sleep 3
robot1.timers
