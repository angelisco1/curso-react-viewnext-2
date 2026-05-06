// const fs = require('fs')

// fs.readFile('1.txt', (error, data) => {
//   if (error) {
//     console.error(error)
//     return
//   }

//   console.log(data.toString())

//   fs.readFile('2.txt', (error, data) => {
//     if (error) {
//       console.error(error)
//       return
//     }
  
//     console.log(data.toString())
//   })
// })

const fsProm = require('fs/promises')

// fsProm.readFile('1.txt')
//   .then(data => {
//     console.log(data.toString())

//     return fsProm.readFile('2.txt')
//   })
//   .then(data => {
//     console.log(data.toString())
//   })
  

// Async / await

const leerArchivosEnOrden = async () => {
  const data1 = await fsProm.readFile('1.txt')
  console.log(data1.toString())
  
  const data2 = await fsProm.readFile('2.txt')
  console.log(data2.toString())
}

leerArchivosEnOrden()