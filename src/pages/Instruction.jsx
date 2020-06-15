import React from 'react'
import { useParams } from 'react-router-dom'
import sitemap from '../content/sitemap.json'
import Markdown from '../components/Markdown'
import useDynamicMarkdownImport from '../hooks/useDynamicMarkdownImport'
import './Instruction.scss'
import Button from '../components/Button'

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
    <>
      <h1>{level.title || ''}</h1>
      <Markdown text={text} />
      <div className="Buttons">
        {
          level.prevLevelId && (
            <Button to={`/${moduleObj.id}/${level.prevLevelId}/instructions`}>Anterior</Button>
          )
        }
        <Button to={`/${moduleObj.id}/${level.id}/challenge`}>
          Siguiente
        </Button>
      </div>
    </>
  )
}

export default Instruction
