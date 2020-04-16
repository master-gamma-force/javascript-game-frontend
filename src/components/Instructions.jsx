import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import myMarkdownFile from '../mocks/hello.md'
import Prism from 'prismjs'
// import './CodeEditor.scss'
import './Instructions.scss'

const Instructions = () => {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(myMarkdownFile)
      .then(response => response.text())
      .then(t => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        console.log(t)
        setText(t)
        Prism.highlightAll()
      })
  }, [])
  return (
    <div className="MarkdownText">
      <ReactMarkdown source={text} />
    </div>
  )
}

export default Instructions
