def show_menu
  puts "Calculator"
  puts "_" * 80
  puts "[r] - Regular"
  puts "[m] - Matrix operations"
  puts "[c] - Calculus"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

def show_menu_reg
  puts "Regular Calculator"
  puts "_" * 80
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponents"
  puts "[r] - Square roots"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

def show_menu_matrix
  puts "Matrix Calculator"
  puts "_" * 80
  puts "[a] - Matrix Addition"
  puts "[m] - Matrix Multiplication"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

def show_menu_calc
  puts "Calculus Calculator"
  puts "_" * 80
  puts "[d] - Differentiate"
  puts "[p] - Partially Differentiate"
  puts "[i] - Integrate"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

def calc_op
  show_menu_calc()
  user_selection = gets.chomp.downcase

  until user_selection == 'q'
    case user_selection
    when 'd'
      derive
      break
    when 'p'
      derive_partial
      break
    when 'i'
      integrate
      break
    else
      puts "Invalid selection"
      break
    end
  end
end

def derive
  print "Define function : "
  eval("def f(x) return #{gets} end")
  print "Enter x0 : "
  x0 = gets.to_i
  x1 = x0 + 0.0000000000001
  y0 = f(x0)
  y1 = f(x1)
  puts "f'(x) = #{(y1 - y0) / (x1 - x0)}"
end

def derive_partial
  print "Define function : "
  eval("def f(x, y) return #{gets} end")
  print "Enter x0 : "
  x0 = gets.to_i
  print "Enter y0 : "
  y0 = gets.to_i
  x1 = x0 + 0.0000000000001
  y1 = y0 + 0.0000000000001
  z0 = f(x0, y0)
  z1 = f(x1, y0)
  z2 = f(x0, y1)
  puts "δz/δx = #{(z1 - z0) / (x1 - x0)}"
  puts "δz/δy = #{(z2 - z0) / (y1 - y0)}"
end

def integrate
  print "Define function : "
  eval("def f(x) return #{gets} end")
  print "Enter x0 : "
  x0 = gets.to_i
  print "Enter x1 : "
  x1 = gets.to_i
  width = (x1 - x0) / 1000000.0
  sum = 0
  for i in 0..1000000
    sum += f(x0 + i * width) * width
  end
  y1 = f(x1)
  puts sum
end

def matrix_op
  show_menu_matrix()
  user_selection = gets.chomp.downcase

  until user_selection == 'q'
    if user_selection == 'a' || user_selection == 'm'
      puts "Enter the size for matrix 1"
      print "Number of rows : "
      rows_m1 = gets.to_i
      print "Number of columns : "
      columns_m1 = gets.to_i
      matrix1 = []

      for i in 1..rows_m1
        print "Enter row #{i} seperated by space: "
        row = gets.split(" ").map &:to_i
        until row.length == columns_m1
          print "Enter row #{i} again: "
          row = gets.split(" ").map &:to_i
          puts row.length
        end
        matrix1.push(row)
      end

      puts "Enter the size for matrix 2"
      print "Number of rows : "
      rows_m2 = gets.to_i
      print "Number of columns : "
      columns_m2 = gets.to_i
      matrix2 = []

      for i in 1..rows_m2
        print "Enter row #{i} seperated by space: "
        row = gets.split(" ").map &:to_i
        until row.length == columns_m2
          print "Enter row #{i} again: "
          row = gets.split(" ").map &:to_i
        end
        matrix2.push(row)
      end

      puts "\nmatrix 1"
      for array in matrix1
        for item in array
          print "#{item} "
        end
        puts
      end

      puts "\nmatrix 2"
      for array in matrix2
        for item in array
          print "#{item} "
        end
        puts
      end
      if user_selection == 'a'
        if rows_m1 == rows_m2 && columns_m1 == columns_m2
          matrix3 = []
          for i in 0..rows_m1-1
            arr = []
            for j in 0..columns_m1-1
              num = matrix1[i][j] + matrix2[i][j]
              arr.push(num)
            end
            matrix3.push(arr)
          end
        else
          puts "Two matrices don't have the same size."
          break
        end
      elsif user_selection == 'm'
        if rows_m1 == columns_m2
          matrix3 = []
          for i in 0..rows_m1-1
            arr = []
            for j in 0..columns_m2-1
              num = 0
              for k in 0..columns_m1-1
                num += matrix1[i][k] * matrix2[k][j]
              end
              arr.push(num)
            end
            matrix3.push(arr)
          end
        else
          puts "Cannot multiply these two matrices."
          break
        end
      end
      puts "\nresult"
      puts "-------\n"
      for array in matrix3
        for item in array
          print "#{item} "
        end
        puts
      end
      puts "\n#{"_" * 80}\n\n"
      break
    else
      puts "Invalid selection"
      break
    end
  end
end

def reg_op(user_selection)
  show_menu_reg
  user_selection = gets.chomp.downcase
  print "Enter the first number : "
  n1 = gets.to_i
  print "Enter the second number : " if user_selection != 'r'
  n2 = gets.to_i if user_selection != 'r'

  case user_selection
  when 'a'
    puts "The result is #{n1 + n2}.\n#{"_" * 80}\n\n"
  when 's'
    puts "The result is #{n1 - n2}.\n#{"_" * 80}\n\n"
  when 'm'
    puts "The result is #{n1 * n2}.\n#{"_" * 80}\n\n"
  when 'd'
    puts "The result is #{n1 / n2}.\n#{"_" * 80}\n\n"
  when 'e'
    puts "The result is #{n1 ** n2}.\n#{"_" * 80}\n\n"
  when 'r'
    puts "The result is #{Math.sqrt(n1)}.\n#{"_" * 80}\n\n"
  else
    puts "Invalid selection"
  end
end

show_menu()
user_selection = gets.chomp.downcase

until user_selection == 'q'
  case user_selection
  when 'r'
    reg_op(user_selection)
  when 'm'
    matrix_op
  when 'c'
    calc_op
  else
    puts "Invalid selection"
  end

  show_menu()
  user_selection = gets.chomp.downcase
end

puts "Get some paper and pencils!"
