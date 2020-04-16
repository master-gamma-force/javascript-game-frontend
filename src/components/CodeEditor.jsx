import React from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'

import './CodeEditor.scss'

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
        className="CodeEditor"
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        // highlight={code => highlight(code, languages.javascript)}
        highlight={code =>
          highlight(code, languages.javascript)
            .split('\n')
            .map(
              line =>
                `<span class="container_editor_line_number">${line}</span>`
            )
            .join('\n')
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          height: '100%'
        }}
      />
    )
  }
}

export default CodeEditor
