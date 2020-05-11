
// eslint-disable-next-line import/prefer-default-export
export const testCode = ({ code, callback, test }) => {
  const worker = new Worker('../core/workers/worker.bundle')

  const data = { code, test }

  worker.addEventListener('message', (event) => {
    callback(event)
    worker.terminate()
  }, false)

  worker.postMessage(data)
}
