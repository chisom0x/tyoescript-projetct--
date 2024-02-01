const carMakers: string[] = ['ford', 'toyota', 'tesla']

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
carMakers.push('range');

// help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase()
})

//flexible types
const importantDates: (Date | string)[] = [new Date(),]
importantDates.push( '2030-10-10')
importantDates.push(new Date())