#Write a program that promts the user to enter a file name,
#reads the contents of the file and prints it to the screen

file_name = input("Enter the name of the file you want to open: ")
with open(file_name, 'r') as fname:
    contents = fname.read()
    print(contents)
