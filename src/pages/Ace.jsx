import React, { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-dracula'
import 'brace/mode/javascript'

export default function Ace() {
  const [code, setCode] = useState('const hola = "Mundo"')
  const onLoad = (editor, e) => {}
  const onChange = (newValue, e) => {
    setCode(newValue)
  }
  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="dracula"
      name="code editor"
      onLoad={onLoad}
      onChange={onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}
