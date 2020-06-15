import React from 'react'
import { useParams } from 'react-router-dom'

// Components
import './Challenge.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'
import Test from '../components/Test'

// data
import sitemap from '../content/sitemap.json'

//core
import CoreWorker from '../core/workers/worker'

// hooks
import useDynamicTestsImport from '../hooks/useDynamicTestsImport'
import useDynamicMarkdownImport from '../hooks/useDynamicMarkdownImport'

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

  const { moduleId, levelId } = useParams()
  const moduleObj = sitemap
    .filter((module) => module.id === moduleId)
    .reduce((module) => module)
  const level = moduleObj.levels
    .filter((level) => level.id === parseInt(levelId, 10))
    .reduce((level) => level)
  const { testPath, challengePath } = level

  const [instructions] = useDynamicMarkdownImport(challengePath)
  const { code, setCode, tests } = useDynamicTestsImport(testPath)

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
              onClick={(e) => { handleRunTests(e, { code, tests }) }}
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
