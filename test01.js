//ใช้แบบ ESModule
// import {sau, score, sumNumber, squareArea} from './my-module01.js'
import {sauXX, scoreXX, sumNumberXX, squareAreaXX} from './my-module02.js'
import wow from './my-module03.js'
import  squareAreaZZ, {sauZZ, sumNumberZZ} from './my-module04.js'

console.log(sauXX)
console.log(scoreXX)
// score = 555 error ต้องระวังถึงแม้ต้นทางเป็น let แต่ก็ห้ามแก้ไข
console.log(scoreXX)
console.log(sumNumberXX(10, 20))
console.log(squareAreaXX(10, 20))
console.log('----------------------------')
console.log(wow.sauYY)
console.log(wow.sumNumberYY(10, 20))
console.log('----------------------------')
console.log(sauZZ)
console.log(sumNumberZZ(10, 20))
console.log(squareAreaZZ(10, 20))