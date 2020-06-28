import React from 'react'
import './LevelList.scss'
import LevelItem from './LevelItem'
import levelData from '../content/sitemap.json'

const LevelList = () => {
  let sitemap = []
  const initialData = () => {
    let data = JSON.parse(localStorage.getItem('levelData'))
    if (!data) {
      data = levelData
      localStorage.setItem('levelData', JSON.stringify(levelData))
    }
    sitemap = data
  }

  initialData()
  return (
    <>
      {sitemap.map((modules) => (
        <div key={modules.name}>
          <h1 className="LevelList-Title">{modules.name}</h1>
          <div className="LevelList-Body">
            {modules.levels.map((moduleObj) => {
              return (
                <LevelItem
                  key={`module-${moduleObj.id}`}
                  {...moduleObj}
                  id_category={modules.id}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}

export default LevelList
