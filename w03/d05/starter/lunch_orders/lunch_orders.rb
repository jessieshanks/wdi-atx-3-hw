<<<<<<< HEAD
$orders = {}

def print_divider
  print"\n----------------------------------------------------------\n"
end

def header
# prints program header
  print_divider
  print "\nLUNCHTIME!\n\Please place your order(s) below.\n"
  print_divider
end

def new_order
# gets order information from user
  print "\nName for order: "
  name=gets.chomp.capitalize
  unless $orders.key?(name)
    $orders[name]=Array.new(0)
  end
  print "#{name} wants to order (enter 1 item): "
  item=gets.chomp.downcase
  $orders[name].push(item)
  print "Add another item to the order? (y/n): "
  another=(gets.chomp.downcase=='y')
  if another
    new_order
  end
end

def print_orders
# prints order information
  print_divider
  print "\nALL ORDERS:\n"
  $orders.each do |name, food_list|
    print "#{name} ordered a "
    for i in 0...food_list.length
      if food_list.length>1
        if i==(food_list.length-1)
          print " \& "
        elsif i>0
          print ", "
        end
      end
      print "#{food_list[i]}"
    end
    print ".\n"
  end
  print_divider
end


header
new_order
print_orders
=======
orders = {}
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
