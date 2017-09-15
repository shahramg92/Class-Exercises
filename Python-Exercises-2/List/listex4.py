listex = [2, 4, 5, 6, 7, 8]
evennum = list()
for even in listex:
    if even % 2 == 0:
        evennum.append(even)

print("Even numbers:" , evennum)
