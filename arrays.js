var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  var newArray = [element, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
}