import React, { useState, useEffect } from 'react'

// core imports
import Test from '../components/Test'
import { testCode } from '../services/workerConnection'
import instructionsFile from '../mocks/filterInstructions.md'

// Components
import './Level.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'

import MyWorker from '../core/workers/test.worker'
import CoreWorker from '../core/workers/worker.bundle'
// import editorFile from '../mocks/codigoFilter.mock'

import { TEMPLATE,
  TEST,
} from '../core/templates/filter'

const handleRunTests = (e, { code, tests }) => {
  const worker = new CoreWorker()
  const data = { code, tests, counter: 1 }
  worker.postMessage(data)
  console.log(data)

  worker.addEventListener('message', (event) => {
    console.log(event)
    worker.terminate()
  }, false)
}

const Level = () => {
  const [instructions, setInstructions] = useState('')
  const [code, setCode] = useState(TEMPLATE)
  useEffect(() => {
    fetch(instructionsFile)
      .then((response) => response.text())
      .then((t) => {
        setInstructions(t)
      })
  }, [])
  console.log(code)
  return (
    <div className="Level">
      <div className="Level-Instructions">
        <Markdown text={instructions} />
      </div>
      <div className="Level-Tests">
        <Test status="valid" text="Respuesta válida" />
        <Test status="invalid" text="Respuesta inválida" />
        <Test status="to-do" text="Por definir" />
      </div>
      <div className="Level-Editor">
        <div className="Editor">
          <div className="Editor-header">
            {'</> '}
            Editor
          </div>
          <CodeEditor code={code} setCode={setCode} />
          <div className="Editor-footer">
            <button
              type="button"
              className="Editor-button"
              onClick={(e) => { handleRunTests(e, { code, tests: TEST }) }}
            >
              Correr Pruebas
            </button>
          </div>
        </div>
      </div>
      <div className="Level-Footer" />
    </div>
  )
}

export default Level
