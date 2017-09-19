#Creat a class Vehicle. A Vehicle object will have 3 attributes:
#make, model, year

class Vehicle:
    def __init__ (self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    def print_info(self):
        print(self.make, self.model, self.year)

car = Vehicle('Rolls Royce', 'Phanton', '2018')

car.print_info()
