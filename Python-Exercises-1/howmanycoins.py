def main():
    want_coins = True
    coins = 0

    while want_coins:
        print("You have {0} coins.".format(coins))
        answer = input("Do you want more coins? Give me a yes \n no: ")
        if answer == "yes":
            coins += 1
        elif answer == "no":
            print("Okay, bye!")
            want_coins = False
        else:
            print("That answer makes no sense. Try again.")

main()
