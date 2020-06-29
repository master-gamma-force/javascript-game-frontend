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
  console.log(allowNext)
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
          tests.map((test) => <Test status={test.status} text={test.description} key={test.type} />)
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
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 443.52 443.52"
                transform="rotate(180)"
              >
                <g>
                  <g>
                    <path xmlns="http://www.w3.org/2000/svg" d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264   c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168   c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413   c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864   c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
                  </g>
                </g>
              </svg>
            </Button>

            <Button
              onClick={(event) => { handleRunTests(event, { code, tests, setTests, setAllowNext }) }}
            >
              Correr Pruebas
            </Button>
            {
              level.nextLevelId ? (
                <Button
                  className="button-next"
                  to={`/${moduleObj.id}/${level.nextLevelId}/instructions`}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 443.52 443.52"
                  >
                    <g>
                      <g>
                        <path xmlns="http://www.w3.org/2000/svg" d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264   c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168   c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413   c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864   c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
                      </g>
                    </g>
                  </svg>
                </Button>
              ) : null
            }
          </div>
        </div>
      </div>
      <div className="Challenge-Footer" />
    </div>
  )
}

export default Challenge
