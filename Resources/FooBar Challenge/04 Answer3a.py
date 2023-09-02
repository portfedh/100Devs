
'''
"Bomb, Baby!"

Constraints
======
Your code will run inside a Python 2.7.13 sandbox. All tests will be run by calling the solution() function.

Standard libraries are supported except for bz2, crypt, fcntl, mmap, pwd, pyexpat, select, signal, termios, thread, time, unicodedata, zipimport, zlib.

Input/output operations are not allowed.

Your solution must be under 32000 characters in length including new lines and other non-printing characters.


Bomb, Baby!
===========
You're so close to destroying the LAMBCHOP doomsday device you can taste it! But in order to do so, you need to deploy special self-replicating bombs designed for you by the brightest scientists on Bunny Planet. There are two types: Mach bombs (M) and Facula bombs (F). The bombs, once released into the LAMBCHOP's inner workings, will automatically deploy to all the strategic points you've identified and destroy them at the same time.

But there's a few catches. First, the bombs self-replicate via one of two distinct processes:
Every Mach bomb retrieves a sync unit from a Facula bomb; for every Mach bomb, a Facula bomb is created;
Every Facula bomb spontaneously creates a Mach bomb.

For example, if you had 3 Mach bombs and 2 Facula bombs, they could either produce 3 Mach bombs and 5 Facula bombs, or 5 Mach bombs and 2 Facula bombs. The replication process can be changed each cycle.

Second, you need to ensure that you have exactly the right number of Mach and Facula bombs to destroy the LAMBCHOP device. Too few, and the device might survive. Too many, and you might overload the mass capacitors and create a singularity at the heart of the space station - not good!

And finally, you were only able to smuggle one of each type of bomb - one Mach, one Facula - aboard the ship when you arrived, so that's all you have to start with. (Thus it may be impossible to deploy the bombs to destroy the LAMBCHOP, but that's not going to stop you from trying!)

You need to know how many replication cycles (generations) it will take to generate the correct amount of bombs to destroy the LAMBCHOP.


Problem
=========

Write a function solution(M, F) where M and F are the number of Mach and Facula bombs needed. 

Return the fewest number of generations (as a string) that need to pass before you'll have the exact number of bombs necessary to destroy the LAMBCHOP, or the string "impossible" if this can't be done!

M and F will be string representations of positive integers no larger than 10^50.
    For example, if M = "2" and F = "1", one generation would need to pass, so the solution would be "1". 
    However, if M = "2" and F = "4", it would not be possible.

Test cases
==========
Input:
solution.solution('4', '7')
Output:
    4

Input:
solution.solution('2', '1')
Output:
    1
'''

def solution(match_bombs_needed, facula_bombs_needed):

    # Convert input to integers
    match_bomb = int(match_bombs_needed)
    facula_bomb = int(facula_bombs_needed)

    # Keep track of generations
    generations_needed = 0

    # Start inverse replication loop
    while True:
        # Case: End of loop --> Ok
        # If match_bomb and facula_bomb are equal to 1
        # We are at the start of the the loop.
        # Return the number of generation passed as a string
        if match_bomb == 1 and facula_bomb == 1:
            return str(generations_needed)
        
        # Case: End of loop --> Impossible
        elif match_bomb <= 0 or facula_bomb <= 0:
            return "impossible"
        
        # Case: Inverse replication loop
        # Check which bomb is larger
        # Subtract the number of bombs with the smaller number from the larger number
        # This will get us to the state of bombs in the previous generation
        # Increment the generation counter
        else:
            if match_bomb > facula_bomb:
                # If the difference is more than 5x, 
                # Calculate a multiplication factor
                # This is to reduce the number of loops needed
                # If the bomb number is high
                # And increase generations by result 
                if match_bomb > (5 * facula_bomb):
                    multiplicationFactor = (int(match_bomb / facula_bomb) -1)
                    generations_needed += multiplicationFactor
                    match_bomb = match_bomb - (multiplicationFactor * facula_bomb)
                else:
                    match_bomb -= facula_bomb
                    generations_needed += 1
            else:
                if facula_bomb > (5 * match_bomb):
                    multiplicationFactor = (int(facula_bomb / match_bomb) -1)
                    generations_needed += multiplicationFactor
                    facula_bomb = facula_bomb - (multiplicationFactor * match_bomb)
                else:
                    facula_bomb -= match_bomb
                    generations_needed += 1