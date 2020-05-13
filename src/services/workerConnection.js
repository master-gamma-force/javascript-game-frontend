// import workerize from 'workerize'

// (async () => {
//   console.log('3 + 9 = ', await worker.add(3, 9))
//   console.log('1 + 2 = ', await worker.add(1, 2))
// })()

// eslint-disable-next-line import/prefer-default-export
export const testCode = ({ code, callback, tests }) => {
  const worker = new Worker('../core/workers/worker.bundle')

  const data = { code, tests }

  worker.addEventListener('message', (event) => {
    callback(event)
    worker.terminate()
  }, false)

  worker.postMessage(data)
}
