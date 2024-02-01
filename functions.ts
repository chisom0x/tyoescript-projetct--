const add = (a: number, b: number): number => {
   return a + b
}

const subtract = (a: number, b: number): number => {
     return a - b
 }

 function divide(a: number, b: number): number {
    return a / b
 }

 const  multiply = function(a: number, b: number): number {
    return a * b
 }

 //use : void when your function is not returning anything
 const logger = (message: string): void => {
    console.log(message)
 }

 const throwError = (mesage: string): never => {
    throw new Error(mesage)
 }

 const forecast = {
    date: new Date(),
    weather: 'sunny'
 }

 const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
 }
