require 'pry'

class SingleLinkedList < Object
  attr_accessor :head

  def initialize(value = nil)
    @head = Node.new(value) if value
  end

  Node = Struct.new(:value,:next)
  # class Node
  #   attr_accessor :value, :next
  #   def initialize(value = nil)
  #     @value = value
  #     @next = nil
  #   end
  # end

  def prepend(value = nil) #AKA .unshift
    n = Node.new(value)
    n.next = @head
    @head = n
  end

  def get_last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def append(value = nil)
    n = Node.new(value)
    last_node = get_last
    last_node.next = n
  end

  def insert_after(node_value, new_node_value)
    node = find(node_value)
    if (node != nil)
      new_node = Node.new(new_node_value)
      new_node.next = node.next
      node.next = new_node
    else
      p "#{node_value} is not found"
    end
  end

  def remove #AKA shift
    @head = @head.next
  end

  def remove_last
    node = @head
    while node.next.next
      node = node.next
    end
    node.next = nil
  end

  def length #AKA size, count
    node = @head
    length = 0;
    while node
      node = node.next
      length += 1
    end
    length
  end

  def find(needle)
    # Returns the node with value of needle or nil
    node = @head
    while node
      if (needle === node.value)
        return node
      end
      node = node.next
    end
    return nil
  end

  def reverse
    reverse_list = SingleLinkedList.new(@head.value)
    node = @head.next
    while node
      reverse_list.prepend(node.value)
      node = node.next
    end

    p "Printing reverse of bros"
    reverse_list.show_all

    reverse_list
  end

  def reverse!
    @head = reverse.head
  end

  def each
    node = @head
    while node
      yield node if block_given?
      node = node.next
    end
  end

  def show_all
    each { |node| p node.value }
  end
  # .map, .inject etc
end

bros = SingleLinkedList.new("Groucho")
bros.append("Harpo")
bros.append("Chico")

binding.pry
