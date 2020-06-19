/* eslint-disable no-param-reassign */
/* eslint-disable no-eval */

import TestManager from '../TestManager/TestManager'

// eslint-disable-next-line
self.addEventListener('message', (e) => {
  const tm = new TestManager(e.data.tests)

  let step

  try {
    step = 'load user code'
    const userCode = e.data.code.replace(/console.log/g, '')

    step = 'run user code'
    // eslint-disable-next-line no-unused-vars
    const userResult = (eval(`() => { ${userCode} }`))()

    step = 'load test'

    tm.tests.forEach((test) => {
      test.value = (eval(`() => {${userCode} return ${test.value};}`))()
    })

    step = 'run test'
    tm.run()
  } catch (err) {
    tm.log.newProcessLog({
      step,
      pass: false,
      err,
    })
  }
  // eslint-disable-next-line
  self.postMessage({
    logs: tm.log.logs,
    errors: tm.log.errors,
    process: tm.log.processLog,
  })
}, false)
