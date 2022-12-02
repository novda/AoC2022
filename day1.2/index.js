const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const param = fileContent.toString().split('\n')


function countOfCaloriesThree(param) {
  let maxResult = 0
  let middleResult = 0
  let minResult = 0

  let currentSum = 0


  for (let i = 0; i < param.length; i += 1) {
    if (param[i] === '') {
      if (currentSum > maxResult) {
        middleResult = maxResult
        minResult = middleResult
        maxResult = currentSum
      }else if(currentSum > middleResult){
        minResult = middleResult
        middleResult = currentSum
      }else if(currentSum > minResult){
        minResult = currentSum
      }
      currentSum = 0
    } else {
      currentSum += Number(param[i])
    }
  }
  return maxResult + middleResult + minResult
}


fs.writeFileSync("output.txt", countOfCaloriesThree(param).toString())