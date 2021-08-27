
function Calculator() {
  this.dataStore = []
  this.add = add
  this.clearData = clearData
  // this.mul = mul
  // this.divide = divide
  // this.subtract = subtract
  // this.addition = addition
}

function add(e) {
  this.dataStore.push(e)
}

function clearData() {
  this.dataStore.length = 0
}

let calculator = new Calculator()

function setRes(c) {
  document.getElementById('res').innerHTML = c.dataStore.join('')
}

document.getElementById('btn0').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})

document.getElementById('btn1').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})
// Addition sign
document.getElementById('btnSum').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})

document.getElementById('btnMul').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})

document.getElementById('btnSub').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})

document.getElementById('btnDiv').addEventListener('click', function (e) {
  calculator.add(e.target.innerHTML)
  setRes(calculator)
})

// Removes all items from datastore
document.getElementById('btnClr').addEventListener('click', function () {
  calculator.clearData()
  setRes(calculator)
})





