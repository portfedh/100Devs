# Hey, I Already Did That!
# ========================

# Source = https://stackoverflow.com/questions/61907902/google-foobar-challenge-level-2-hey-i-already-did-that

def answer(n, b):

    k = len(n)
    m = n
    mini_id = []
    while m not in mini_id:
        mini_id.append(m)
        s = sorted(m)
        x_descend = ''.join(s[::-1])
        y_ascend = ''.join(s)        
        if b == 10:
            int_m = int(x_descend) - int(y_ascend)
            m = str(int_m)
        else:
            int_m_10 = int(to_base_10(x_descend, b)) - int(to_base_10(y_ascend, b))
            m = to_base_n(str(int_m_10), b)

        m =  (k - len(m)) * '0' + m
    return len(mini_id) - mini_id.index(m)