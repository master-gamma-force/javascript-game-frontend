import React from 'react'
import SimpleEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'

import './CodeEditor.scss'

// const code = `
// function helloWorld() {
//   console.log('Hello World')
// }
// helloWorld()
// `

const CodeEditor = ({ code, setCode }) => {
  return (
    <SimpleEditor
      className="CodeEditor"
      value={code}
      onValueChange={(localCode) => setCode(localCode)}
      highlight={(localCode) => highlight(localCode, languages.javascript)
        .split('\n')
        .map(
          (line) => `<span class="container_editor_line_number">${line}</span>`,
        )
        .join('\n')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
      }}
    />
  )
}

export default CodeEditor
