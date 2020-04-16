import React, { useState, useEffect } from 'react'
import './Level.scss'
import CodeEditor from '../components/CodeEditor'
import Markdown from '../components/Markdown'

import instructionsFile from '../mocks/filterInstructions.md'
import editorFile from '../mocks/codigoFilter.mock'

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
      <div className="Level-Tests" />
      <div className="Level-Editor">
        <CodeEditor code={code} setCode={setCode} />
      </div>
      <div className="Level-Footer" />
    </div>
  )
}

export default Level
