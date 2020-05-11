import React, { useState, useEffect } from 'react'
import './Level.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'

import instructionsFile from '../mocks/filterInstructions.md'
import editorFile from '../mocks/codigoFilter.mock'
import Test from '../components/Test'

export const TEMPLATE = `let leonidas = {
  name: "Leondias",
  skill:  "JavaScript"
}
let nicole = {
  name: "Nicole",
  skill: "Python"
}
let richard = {
  name: "Richard",
  skill: "Python"
}
let angela = {
  name: "Angela",
  skill: "JavaScript"
}

const employees = [];

const  knowPython = () => {

}

const sabePython = employees.method(function);

console.log(sabePython);`

export const TEST = [
  {
    description: 'Test content employees know Python',
    type: 'deepEqual',
    value: 'sabePython',
    params: [
      [
        { name: 'Nicole', skill: 'Python' },
        { name: 'Richard', skill: 'Python' },
      ],
    ],
  },
  {
    description: 'Test length of employees know Python',
    type: 'equal',
    value: 'sabePython.length',
    params: [2],
  },
]

const Level = () => {
  const [instructions, setInstructions] = useState('')
  const [code, setCode] = useState('')
  useEffect(() => {
    fetch(instructionsFile)
      .then((response) => response.text())
      .then((t) => {
        setInstructions(t)
      })
    fetch(editorFile)
      .then((response) => response.text())
      .then((t) => {
        setCode(t)
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
            <button className="Editor-button">Correr Pruebas</button>
          </div>
        </div>
      </div>
      <div className="Level-Footer" />
    </div>
  )
}

export default Level
