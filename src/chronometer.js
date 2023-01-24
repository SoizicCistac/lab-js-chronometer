class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
   let intervalId = setInterval(() => {
      this.currentTime++
      if (typeof printTimeCallback === 'function') {
        printTimeCallback()
      }
      this.intervalId = intervalId
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString =JSON.stringify(value)

    if (valueString.length < 2){
      valueString = '0' + valueString
    }

    return valueString
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())

    return splitTime
  }
}
