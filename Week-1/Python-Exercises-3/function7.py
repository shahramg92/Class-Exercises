import matplotlib.pyplot as plot

def Ctof(x):
    return x * (9/5) + 32

c = list(range(0, 100))
f = []
for x in c:
    f.append(Ctof(x))

plot.plot(c, f)
plot.xlabel('Degrees Celsius')
plot.ylabel('Degrees Fahrenheit')
plot.show()
