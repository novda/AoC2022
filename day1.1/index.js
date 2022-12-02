const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const param = fileContent.toString().split('\n')


function countOfCalories(param) {
  
}


  fs.writeFileSync("output.txt", countOfCalories(param).toString())