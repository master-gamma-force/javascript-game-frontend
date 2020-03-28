import React from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'

import './CodeEditor.css'

const code = `function add(a, b) {
  return a + b;
}
`

class CodeEditor extends React.Component {
  constructor () {
    super()
    this.state = { code }
  }

  render () {
    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.javascript)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          backgroundColor: 'white',
          border: '1px solid black'
        }}
      />
    )
  }
}

export default CodeEditor
