import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import './Markdown.scss'
import Prism from 'prismjs'

const Markdown = ({ text }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [text])
  return (
    <div className="Markdown">
      <ReactMarkdown
        source={text}
        escapeHtml={false}
      />
    </div>
  )
}

export default Markdown
