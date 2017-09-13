ex9_list1 = [[1, 3], [2, 4]]
ex9_list2 = [[5,2], [1, 0]]
ex9_sum = []
def add_matrices(a, b):
    # Iterate over list
    for i in range(0, len(a)):
        # Iterate over sub-list
        temp = []
        for j in range(0, len(a[i])):
            temp.append(a[i][j] + b[i][j])
        ex9_sum.append(temp)
    return ex9_sum
print("9. Matrix Addition:\n", add_matrices(ex9_list1, ex9_list2))
