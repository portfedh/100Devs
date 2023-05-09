def solution(x, y):
    # Convert strings into integers
    m = int(x)
    f = int(y)
    # Set the number of generations
    gens = 0
    # Start inverse replication loop
    while True:
        # If M and F are equal to 1
        # return the number of generation passed
        if m == 1 and f == 1:
            return str(gens)
        # If either M or F is less than 1
        # or they are equal (but not 1, it'd be
        # captured above) return "impossible"
        elif m<1 or f<1 or m==f:
            return "impossible"
        # Check which one is larger, perform
        # the inverse replication and increment
        # the generation counter
        else:
            if m > f:
                # If the difference is more 
                # than 10x, calculate a 
                # multiplication factor and
                # increase gens accordingly 
                if m > 10*f:
                    multi = (int(m/f) -1)
                    gens += multi
                    m = m - (multi*f)
                else:
                    m-=f
                    gens += 1
            else:
                if f > 10*m:
                    multi = (int(f/m) -1)
                    gens += multi
                    f = f - (multi*m)
                else:
                    f-=m
                    gens += 1