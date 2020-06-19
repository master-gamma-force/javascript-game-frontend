import React, { useEffect, useState } from 'react'
import Markdown from './Markdown'
import myMarkdownFile from '../mocks/hello.md'
import './Instructions.scss'

const Instructions = () => {
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

export default Instructions
