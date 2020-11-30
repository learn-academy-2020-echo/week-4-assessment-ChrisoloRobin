# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#.map through array,
#.filter numbers, or perhaps #.select
#.sort least to greatest


# def to_i
#     self.map {|x| begin; Integer(x); rescue; nil; end}.compact
#   end


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

#.map through arrays
#.includes char



# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#string.delete "aeiou"

def disemvowl(string)
    vowels = 'aeiou'
    string.each_char { |char|
        string.delete!(char) if vowels.include?(char.titleize)
    }
end


# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100


#array.map(&:to_i).reduce(0, :+)

#[42, 7, 27].sum
#[25, 17, 47, 11].sum


def add_array(array)
  sum = 0
  for i in array do
    sum += i
  end
  sum
end

puts add_array([42, 7, 27])
puts add_array([25, 17, 47, 11])


# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'



def palindrom_check(variable)
  if variable.reverse == variable #Check if string same when reversed
    puts "#{ variable } is a palindrome."
  else # If string is not the same when reversed
    puts "#{ variable } is not a palindrome."
  end
end
