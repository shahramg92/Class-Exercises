#1. Instantiate an instance object of Person with name of 'Sonny',
#email of 'sonny@hotmail.com', and phone of '483-485-4948',
#store it in the variable 'sonny'.
#2. Instantiate another person with the name of 'Jordan',
#email of 'jordan@aol.com', and phone of '495-586-3456',
#store it in the variable 'jordan'.
#3. Have sonny greet jordan using the greet method.
#4. Have jordan greet sonny using the greet method.
#5. Write a print statement to print the contact info (email and phone) of Sonny.
#6. Write another print statement to print the contact info of Jordan.

class Person:
    def __init__(self, name, email, phone, friend):
        self.name = name
        self.email = email
        self.phone = phone
        self.friend = friend

    def greet(self, other_person):
        print ('Hello {}, I am {}!'.format(other_person.name, self.name))

    def print_contact_info(self):
        print("Sonny's email: ", self.email, "Sonny's phone number: ", self.phone)



sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')
sonny.greet(jordan)
jordan.greet(sonny)
sonny.print_contact_info()
jordan.friends.append(sonny)
sonny.friends.append(jordan)


print(sonny.email, sonny.phone)
print(jordan.email, jordan.phone)
