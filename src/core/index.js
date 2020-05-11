import { TEMPLATE, TEST } from './templates/filter'

document.getElementById('user_code').defaultValue = TEMPLATE

const callback = (e) => {
  console.log(e.data.logs)
  console.log(e.data.errors)
}

const testCode = () => {
  const code = document.getElementById('user_code').value
  const worker = new Worker('worker.bundle.js')

  const data = { code, test: TEST }

  worker.addEventListener('message', (e) => {
    callback(e)
    worker.terminate()
  }, false)

  worker.postMessage(data)
}

document.getElementById('button-evaluar').addEventListener('click', testCode)
