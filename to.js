var called = 0

function interval() {
  console.log('called interval', called)
  called=called+1
  setTimeout(interval, 500)
}

function get() {
  return called
}

module.exports = {
  get: get,
  interval: interval
}
