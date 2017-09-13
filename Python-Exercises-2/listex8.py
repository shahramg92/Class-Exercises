#[2, 4, 5] x [2, 3, 6] = [4, 12, 30]

m1 = [2, 4, 5]
m2 = [2, 3, 6]

answer = []


for num in range(0, len(m1)):
    answer.append(m1[num] * m2[num])
print(answer)
