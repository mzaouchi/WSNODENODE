// console.log('Hello Alaya')

// function Sum(a,b){
//     return a+b
// }

// console.log(Sum(1,3))

// const Sum=(a,b)=>{
//     return a+b
// }

// console.log(Sum(7,7))

// console.log(process.argv)

// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Sum(+process.argv[2],+process.argv[3]))


// const Sous = require('./modulelocal')
// const Multi = require('./modulelocal')

// console.log(Sous(+process.argv[2],+process.argv[3]))

// console.log(Multi(+process.argv[2],+process.argv[3]))

// const obj = require('./modulelocal')

// console.log(obj.Sous(+process.argv[2],+process.argv[3]))

// console.log(obj.Multi(+process.argv[2],+process.argv[3]))


const {Sous,Multi} = require('./modulelocal')

console.log(Sous(+process.argv[2],+process.argv[3]))

console.log(Multi(+process.argv[2],+process.argv[3]))