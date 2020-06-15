import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sitemap from '../content/sitemap.json'
import Markdown from '../components/Markdown'
import useDynamicMarkdownImport from '../hooks/useDynamicMarkdownImport'

const Instruction = () => {
  const { moduleId, levelId } = useParams()
  const moduleObj = sitemap
    .filter((module) => module.id === moduleId)
    .reduce((module) => module)
  const level = moduleObj.levels
    .filter((level) => level.id === parseInt(levelId, 10))
    .reduce((level) => level)
  const { contentPath } = level
  const [text] = useDynamicMarkdownImport(contentPath)

  return (
    <Markdown text={text} />
  )
}

export default Instruction
