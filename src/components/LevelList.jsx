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
      {sitemap.map((item) => (
        <div key={item.name}>
          <h1 className="LevelList-Title">{item.name}</h1>
          <div className="LevelList-Body">
            {item.levels.map((i, index) => {
              i.id_category = item.id
              return <LevelItem key={index} {...i} />
            })}
          </div>
        </div>
      ))}
    </>
  )
}

export default LevelList
