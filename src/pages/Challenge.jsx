import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Components
import './Challenge.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'
import Test from '../components/Test'
import Button from '../components/Button'

// data
import sitemap from '../content/sitemap.json'

//core
import CoreWorker from '../core/workers/worker'

// hooks
import useDynamicTestsImport from '../hooks/useDynamicTestsImport'
import useDynamicMarkdownImport from '../hooks/useDynamicMarkdownImport'

const handleResponseTest = (event, { history, moduleObj, level }) => {
  console.log('Logs:', event.data.logs)
  console.log('Errors:', event.data.errors)
  history.push({
    pathname: level.nextLevelId ?
      `/${moduleObj.id}/${level.nextLevelId}/instructions` :
      '/',
    state: {},
  })
}

const handleRunTests = (_, { code, tests, history, moduleObj, level }) => {

  const worker = new CoreWorker()
  const data = { code, tests }
  worker.addEventListener('message', (event) => {
    handleResponseTest(event, { history, moduleObj, level })
    worker.terminate()
  }, false)
  worker.postMessage(data)

}

const Challenge = () => {
  const history = useHistory()

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
            <Button
              to={`/${moduleObj.id}/${level.id}/instructions`}
              small
            >
              {'<-'}
            </Button>

            <Button
              onClick={(event) => { handleRunTests(event, { code, tests, history, moduleObj, level }) }}
            >
              Correr Pruebas
            </Button>
          </div>
        </div>
      </div>
      <div className="Challenge-Footer" />
    </div>
  )
}

export default Challenge
