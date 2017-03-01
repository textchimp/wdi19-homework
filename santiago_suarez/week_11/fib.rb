require 'Benchmark'

time_1 = Benchmark.realtime do
  def fib(n)
    n < 2 ? n : fib(n-1) + fib(n-2)
  end

  fib(40)
end

puts "#{time_1} seconds for running this fib function"


time_2 = Benchmark.realtime do
  @cache = { 0 => 0, 1 => 1 }

  def fib_memoization(n)
    @cache[n] ||= fib_memoization(n-1) + fib_memoization(n-2)
  end

  fib_memoization(40)
end

puts "#{time_2} seconds for running memoized fib function"

# Fancy Hash fibonacci memoization
@fibonacci_hash = Hash.new do |nums, i| 
  nums[i] = @fibonacci_hash[i-2] + @fibonacci_hash[i-1]
end
@fibonacci_hash[1] = 1
@fibonacci_hash[2] = 1

time_3 = Benchmark.realtime do
  @fibonacci_hash[5000]
end

puts "#{time_3} seconds for running hash fancy fibonacci function"


time_4 = Benchmark.realtime do
  def fib_fasty(n, a=1, b=1)
    if n > 1
      fib_fasty(n-1, b, a+b)
    else
      a
    end
  end

  fib_fasty(40)
end

puts "#{time_4} seconds for running fib_fasty function"
