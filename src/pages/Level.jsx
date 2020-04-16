import React from 'react'
import './Level.scss'
import CodeEditor from '../components/CodeEditor'

const Level = () => {
  return (
    <div className="Level">
      <div className="Level-Instructions"></div>
      <div className="Level-Tests"></div>
      <div className="Level-Editor">
        <CodeEditor></CodeEditor>
      </div>
      <div className="Level-Footer"></div>
    </div>
  )
}

export default Level
