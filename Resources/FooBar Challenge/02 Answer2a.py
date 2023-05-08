
# Problem
# =======
# You have L, a list containing digits (0 to 9).
# L will contain from 1 to 9 digits.
# Write a function solution(L) which finds the largest number that can be made from some or all of these digits and is divisible by 3. 
# If it is not possible to make such a number, return 0 as the solution.
# The same digit may appear multiple times in the list, but each element in the list may only be used once.

# Solution
# ========
# Calculate is sum of all digits is divisible by 3.
#
#     If so, sort list and return number
#
#     If not:
#         Make a list of digits with remainder of 1 or 2.
#         Remove smallest digit that gives a remainder of 1 or 2 when divided by 3.
#         Try again recursively
#
#         If no digits are available:
#             return 0

# Code
# ====

def check_divisible_by_3(list):
    # Check if number is divisible by 3
    sum_of_digits = sum(list)
    return sum_of_digits % 3

def sort_list(list):
    # Sort the list to get largest possible number
    return sorted(list, reverse=True)

def list_to_number(list):
    # Convert list into a number
    num_str = ''.join(map(str, list))
    return int(num_str)

def list_of_numbers_with_remainder_of_1(list):
    # Find which numbers in the list have a reminder of 1, mod 3
    remainder_1 =[]
    for item in list:
        if item % 3 == 1:
            remainder_1.append(item)
    return remainder_1

def list_of_numbers_with_remainder_of_2(list):
    # Find which numbers in the list have a reminder of 2, mod 3
    remainder_2 =[]
    for item in list:
        if item % 3 == 2:
            remainder_2.append(item)
    return remainder_2

def solution(l):

    # Check if largest number is divisible by 3
    remainder = check_divisible_by_3(l)

    # Find the digits that have a remainder of 1 and 2
    remainder_1 = sorted(list_of_numbers_with_remainder_of_1(l))
    remainder_2 = sorted(list_of_numbers_with_remainder_of_2(l))

    if remainder == 0:
        # If number is divisible by 3, sort digits largest to lowest and return number
        sorted_list = sort_list(l)
        return list_to_number(sorted_list)
    
    else:
        # If number is not divisible by 3

        if remainder == 1:
            # Because it has a reminder of 1

            if remainder_1:
                # And remainder_1 list has items, remove the smallest value and try again
                l.remove(remainder_1[0])

            elif len(remainder_2) >= 2:
                # If remainder_1 list has no items and remainder_2 list has at least two items
                # Remove the smallest two values and try again
                # 2 values with remainder 2 = remainder 3 + remainder 1
                l.remove(remainder_2[0])
                l.remove(remainder_2[1])

        elif remainder == 2:
            # Because it has a reminder of 2

            if remainder_2:
                # And remainder_2 list has items, remove the smallest value and try again
                l.remove(min(remainder_2))

            elif len(remainder_1) >= 2:
                # If remainder_2 list has no items and remainder_1 list has at least two items
                # Remove the smallest two values and try again
                # Explanation: 2 values with remainder 1 = remainder 2
                l.remove(remainder_1[0])
                l.remove(remainder_1[1])
           
        if len(l) != 0:
            # If list has items, sort it, turn into integer and return the value
            sorted_list = sort_list(l)
            return list_to_number(sorted_list)

        else:
            # If the original list is not divisible by 3
            # and remainder_1 list has no items.
            # and remainder_2 list has no items.
            # The number cant be made divisible by three
            return 0
