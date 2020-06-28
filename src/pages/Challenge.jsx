import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import './Challenge.scss'
import CodeEditor from '../components/AceEditor'
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

const handleResponseTest = (event, { tests, setTests, setAllowNext }) => {
  const passed = event.data.logs.map((log) => log.test)

  setTests(tests.map((test) => {
    test.status = passed.includes(test.description) ? 'valid' : 'invalid'
    return test
  }))
  const allowNext = tests.reduce((pass, test) => pass && test.status === 'valid', true)
  setAllowNext(allowNext)
}

const handleRunTests = (_, { code, tests, setTests, setAllowNext }) => {
  const worker = new CoreWorker()
  const data = { code, tests }
  worker.addEventListener('message', (event) => {
    handleResponseTest(event, { tests, setTests, setAllowNext })
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
  const { code, setCode, tests, setTests } = useDynamicTestsImport(testPath)
  const [allowNext, setAllowNext] = useState(false)

  return (
    <div className="Challenge">
      <div className="Challenge-Instructions">
        <Markdown text={instructions} />
      </div>
      <div className="Challenge-Tests">
        {
          tests.map((test) => <Test status={test.status} text={test.description} />)
        }
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
              onClick={(event) => { handleRunTests(event, { code, tests, setTests, setAllowNext }) }}
            >
              Correr Pruebas
            </Button>
            <Button
              to={`/${moduleObj.id}/${level.nextLevelId}/instructions`}
              disabled={allowNext}
            >
              {'->'}
            </Button>
          </div>
        </div>
      </div>
      <div className="Challenge-Footer" />
    </div>
  )
}

export default Challenge
