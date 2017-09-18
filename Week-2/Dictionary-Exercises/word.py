x = input("Enter a paragraph. I will return a tally of your words: ")
x = x.lower()


word_histogram = {}

for word in x:
    if word in alphabet:
        if word in word_histogram:
            word_histogram[word] = word_histogram[word] + 1
        else:
            word_histogram[word] = 1

keys = word_histogram.keys()
for word in sorted(keys):
    print(word, word_histogram[word])
