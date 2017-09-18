word = input('Enter a word in all caps... if you dare ')

word = word.replace('A', 'AAA')
word = word.replace('E', 'EEE')
word = word.replace('I', 'III')
word = word.replace('O', 'OOO')
word = word.replace('U', 'UUU')

print("Your word: {}".format(word))
