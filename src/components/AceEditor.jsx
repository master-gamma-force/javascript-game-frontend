import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-dracula'
import 'brace/mode/javascript'

export default function Ace({ code, setCode }) {
  const onLoad = (editor, e) => {}
  const onChange = (newValue, e) => {
    setCode(newValue)
  }
  return (
    <AceEditor
      placeholder="Placeholder Text"
      width="100%"
      height="100%"
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
