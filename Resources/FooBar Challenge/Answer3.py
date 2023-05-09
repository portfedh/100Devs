def solution(x, y):
    mach = int(x)
    fecula = int(y)
    number_generations = 0
    while True:
        if mach == 1:
            if fecula == 1:
                return str(number_generations)
        elif mach<1 or fecula<1 or mach==fecula:
            return "impossible"
        else:
            if mach > fecula:
                mach -= fecula
                number_generations += 1
            else:
                fecula -= mach
                number_generations += 1