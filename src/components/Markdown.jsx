import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.scss'
import Prism from 'prismjs'
// import './CodeEditor.scss'

const Markdown = ({ text }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [text])
  return (
    <div className="Markdown">
      <ReactMarkdown source={text} />
    </div>
  )
}

export default Markdown
