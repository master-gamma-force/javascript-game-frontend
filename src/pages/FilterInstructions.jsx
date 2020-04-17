import React, { useEffect, useState } from 'react'
import Markdown from '../components/Markdown'
import myMarkdownFile from '../mocks/filter.md'

const MarkdownPage = () => {
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(myMarkdownFile)
      .then((response) => response.text())
      .then((t) => {
        setText(t)
      })
  }, [])
  return (
    <Markdown text={text} />
  )
}

export default MarkdownPage
