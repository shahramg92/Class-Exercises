def main():

    bill = float(input("What is the amount of your bill? $"))
    service = input("How was the level of service? Choose from good, fair, or bad? ")
    split = int(input("How many ways will the bill be split? "))

    tips = {"good" : 0.20,
       "fair" : 0.15,
        "bad" : 0.10

}

    tip_percentage = tips[service]
    tip = bill * tip_percentage

    costperguest = (bill + tip) / split

    print("\nYour bill was ${bill:.2f}, and your service was {service}. You should tip ${tip:.2f}.\n\nEach guest owes ${costperguest:.2f}.".format(bill=bill, service=service, tip=tip, costperguest=costperguest))

main()












main()
