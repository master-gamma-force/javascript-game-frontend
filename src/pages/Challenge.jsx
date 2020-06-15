import React, { useState, useEffect } from 'react'

// Components
import './Challenge.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'
import Test from '../components/Test'

// Content
import instructionsFile from '../mocks/filterInstructions.md'
import {
  TEMPLATE,
  TEST,
} from '../core/templates/filter'

//core
import CoreWorker from '../core/workers/worker'

const handleResponseTest = (event) => {
  console.log('Logs:')
  console.log(event.data.logs)
  console.log('Errors:')
  console.log(event.data.errors)
}

const handleRunTests = (e, { code, tests }) => {
  const worker = new CoreWorker()
  const data = { code, tests }
  worker.addEventListener('message', (event) => {
    handleResponseTest(event)
    worker.terminate()
  }, false)
  worker.postMessage(data)
}

const Challenge = () => {
  const [instructions, setInstructions] = useState('')
  const [code, setCode] = useState(TEMPLATE)
  useEffect(() => {
    fetch(instructionsFile)
      .then((response) => response.text())
      .then((t) => {
        setInstructions(t)
      })
  }, [])

  return (
    <div className="Challenge">
      <div className="Challenge-Instructions">
        <Markdown text={instructions} />
      </div>
      <div className="Challenge-Tests">
        <Test status="valid" text="Respuesta válida" />
        <Test status="invalid" text="Respuesta inválida" />
        <Test status="to-do" text="Por definir" />
      </div>
      <div className="Challenge-Editor">
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
      <div className="Challenge-Footer" />
    </div>
  )
}

export default Challenge
