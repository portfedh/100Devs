def solution(matchBombsNeeded, faculaBombsNeeded):

    # Set input as an integer
    matchBomb = int(matchBombsNeeded)
    faculaBomb = int(faculaBombsNeeded)

    # Keep track of generations
    generationsNeeded = 0

    # Start inverse replication loop
    while True:
        # Case: End of loop --> Ok
        # If matchBomb and faculaBomb are equal to 1
        # We are at the start of the the loop.
        # Return the number of generation passed as a string
        if matchBomb == 1 and faculaBomb == 1:
            return str(generationsNeeded)
        
        # Case: End of loop --> Impossible
        elif matchBomb <= 0 or faculaBomb <= 0:
            return "impossible"
        
        # Case: Inverse replication loop
        # Check which bomb is larger
        # Make inverse replication 
        # Increment the generation counter
        else:
            if matchBomb > faculaBomb:
                # If the difference is more than 5x, 
                # Calculate a multiplication factor
                # And increase generations by result 
                if matchBomb > (5 * faculaBomb):
                    multiplicationFactor = (int(matchBomb / faculaBomb) -1)
                    generationsNeeded += multiplicationFactor
                    matchBomb = matchBomb - (multiplicationFactor * faculaBomb)
                else:
                    matchBomb -= faculaBomb
                    generationsNeeded += 1
            else:
                if faculaBomb > (5 * matchBomb):
                    multiplicationFactor = (int(faculaBomb / matchBomb) -1)
                    generationsNeeded += multiplicationFactor
                    faculaBomb = faculaBomb - (multiplicationFactor * matchBomb)
                else:
                    faculaBomb -= matchBomb
                    generationsNeeded += 1