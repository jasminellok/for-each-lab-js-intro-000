function iterativeLog(array) {
  array.forEach((element,index,array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arrayInt = [1,2,3,4,5]
  arrayInt.forEach(callback)
  return arrayInt
}

function doToArray(array, callback) {
  array.forEach(callback)
}
