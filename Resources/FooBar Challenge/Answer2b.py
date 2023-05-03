# Hey, I Already Did That!
# ========================

# Source = https://github.com/hirenvasani/foobar/blob/master/hey_i_already_did_that.py


# Commander Lambda uses an automated algorithm to assign minions randomly to tasks, in order to keep her minions on their toes. But you've noticed a flaw in the algorithm - it eventually loops back on itself, so that instead of assigning new minions as it iterates, it gets stuck in a cycle of values so that the same minions end up doing the same tasks over and over again. You think proving this to Commander Lambda will help you make a case for your next promotion. 
# You have worked out that the algorithm has the following process: 
# 1) Start with a random minion ID n, which is a nonnegative integer of length k in base b
# 2) Define x and y as integers of length k.  x has the digits of n in descending order, and y has the digits of n in ascending order
# 3) Define z = x - y.  Add leading zeros to z to maintain length k if necessary
# 4) Assign n = z to get the next minion ID, and go back to step 2
# For example, given minion ID n = 1211, k = 4, b = 10, then x = 2111, y = 1112 and z = 2111 - 1112 = 0999. Then the next minion ID will be n = 0999 and the algorithm iterates again: x = 9990, y = 0999 and z = 9990 - 0999 = 8991, and so on.
# Depending on the values of n, k (derived from n), and b, at some point the algorithm reaches a cycle, such as by reaching a constant value. For example, starting with n = 210022, k = 6, b = 3, the algorithm will reach the cycle of values [210111, 122221, 102212] and it will stay in this cycle no matter how many times it continues iterating. Starting with n = 1211, the routine will reach the integer 6174, and since 7641 - 1467 is 6174, it will stay as that value no matter how many times it iterates.
# Given a minion ID as a string n representing a nonnegative integer of length k in base b, where 2 <= k <= 9 and 2 <= b <= 10, write a function answer(n, b) which returns the length of the ending cycle of the algorithm above starting with n. For instance, in the example above, answer(210022, 3) would return 3, since iterating on 102212 would return to 210111 when done in base 3. If the algorithm reaches a constant, such as 0, then the length is 1.


def base_2_decimal(number, current_base):
  # Convert a positive number in a certain base to a decimal
  decimal = 0
  # Read each digit from right to left
  for digit in str(number):
    ''' Multiply the digit by the current base, raised to the power 
    of the digits position and add it to the result '''
    decimal = decimal * current_base + int(digit)
  return decimal

def decimal_2_base(number, base):
    # Convert a decimal number to a positive number in the desired base
    result = []
    # Divide the decimal number by the desired base
    while number > 0:
        # Take the remainder at each step
        remainder = str(number % base)
        # Add each remainder to a list
        result.insert(0, remainder)
        number  = number / base
    # Reverse the list and join the numbers to get the desired base
    return ''.join(result)

def get_subtraction(descending_digits, ascending_digits, base):
    ''' Subtract the result of sorting digits in descending order 
    from sorting the digits in ascending order'''

    if base == 10:
        # If base is 10, subtract the numbers using integers
        subtraction_result = int(descending_digits) - int(ascending_digits)
    
    else:
        ''' If not, convert both numbers to decimals with base_2_decimal()
        subtract, and convert the results back to a base using 
        decimal_2_base()'''
        descending_decimal = base_2_decimal(descending_digits, base)
        ascending_decimal = base_2_decimal(ascending_digits, base)
        subtraction_result = descending_decimal - ascending_decimal
        subtraction_result = decimal_2_base(subtraction_result, base)
    
    return subtraction_result

def solution(number, base):
    # Find the number of iterations before a pattern is formed
    results = []
    
    # Apply get_subtraction() on the input number until a repeated result is found
    while True:
        # Sort the digits of the input number in descending and ascending order
        descending_digits = "".join(sorted(str(number), reverse=True))
        ascending_digits = "".join(sorted(str(number)))
        # Subtract the numbers
        subtraction_result = get_subtraction(descending_digits, ascending_digits, base)

        ''' Check if the number of digits in the result is == to number of digits in the original number.
        Add the necessary number of zeroes to to the beginning of the result '''
        subtraction_length = len(str(subtraction_result))
        descending_digits_length = len(str(descending_digits))
        if subtraction_length != descending_digits_length:
            power = pow(10 ,(descending_digits_length - subtraction_length))
            subtraction_result = subtraction_result * power

        # Check if subtraction_result result is in results list.
        # Check every item of results list, and return its index and item.
        for index, item in enumerate(results):
          # Compare each item with current subtraction result
          if item == subtraction_result:
            # If item has been found, return number of iterations 
            # + 1 sin index starts at 0
            return index + 1

        # If not, add the result to the list and repeat
        results = [subtraction_result] + results
        number = subtraction_result
