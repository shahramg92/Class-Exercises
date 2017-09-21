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

class Person(object):
    def __init__(self, name, email, phone):
        self.__name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.people_greeted = []

    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)

    def greet(self, other_person):
        print("Hello, {}, I am {}!".format(other_person.name, self.name))
        self.greeting_count += 1
        if other_person not in self.people_greeted:
            self.people_greeted.append(other_person)

    def print_contact_info(self):
        print("{0}'s email: {1}', {0}'s phone number: {2}".format(self.name, self.email, self.phone))

    def add_friend(self, other_person):
        self.friends.append(other_person)

    def num_friends(self):
        print(len(self.friends))

    def num_unique_people_greeted(self):
        print("I have greeted {} people!".format(len(self.people_greeted)))

class Vehicle(object):
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print(self.year, self.make, self.model, sep=' ')

def main():
    sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
    jordan = Person('Jordan', 'jordan@aol.com', '495-586-3546')
    car = Vehicle('RollsRoyce', 'Phantom', '2018')

    #jordan.friends.append(sonny)
    #sonny.friends.append(jordan)

    #print(len(jordan.friends))
    sonny.print_contact_info()
    jordan.print_contact_info()
    car.print_info()
    sonny.add_friend(jordan)
    jordan.add_friend(sonny)
    #print(len(jordan.friends))
    jordan.num_friends()
    sonny.greet(jordan)
    sonny.greet(jordan)
    print(sonny.greeting_count)
    sonny.num_unique_people_greeted()
    sonny.greet(dee_ann)
    sonny.num_unique_people_greeted()
    print(sonny.greeting_count)

if __name__ == '__main__':
    main()
