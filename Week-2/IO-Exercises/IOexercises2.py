#Write a program that prompts the user to enter a file name,
#then prompts the user to enter the contents of the file,
#and then saves the content to the file

file_name = input("Enter the name of the file you want to open: ")
content = input("Enter some data you would like to write in the file: ")

with open(file_name, 'w') as fh:
        fh.write(content)
print("Done! Here are the contents of", file_name)

with open(file_name, 'r') as fh:
    content = fh.read()
print(content)
