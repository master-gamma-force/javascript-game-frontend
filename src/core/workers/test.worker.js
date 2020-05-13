
self.addEventListener('message', startCounter)

function startCounter(event) {
  let { counter, code, tests } = event.data
  setInterval(() => this.postMessage({ counter: counter++, code, tests }), 1000)
}

