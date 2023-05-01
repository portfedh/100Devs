# Hey, I Already Did That!
# ========================

# Source = ChatGPT

def solution(n, b):
    k = len(n)
    seen = set()
    count = 0
    while n not in seen:
        seen.add(n)
        x = ''.join(sorted(n, reverse=True))
        y = ''.join(sorted(n))
        z = int(x, b) - int(y, b)
        n = format(z, '0' + str(k) + 'd')
        count += 1
    return count - list(seen).index(n)
