import React from 'react'
import { useHistory } from 'react-router-dom'
import './LevelItem.scss'

const LevelItem = ({
  id_category,
  id,
  isActive,
  isWinner,
  levelNumber,
  title,
  contentPath,
  challengePath,
  testPath,
  nextLevelId,
}) => {
  const history = useHistory()
  const classActive =
    `LevelItem-Button ${isActive ? 'LevelItem-Button_isActive' : ''}`
  const classWinner =
    `LevelItem-Image ${
      isWinner ?
        'LevelItem-Image_IsWinner' :
        !isActive ?
          'LevelItem-Image_IsNotWinner' :
          ''}`

  const handleClick = () => {
    if (isActive) {
      activeteWinner()
      activeNextLevel()
      history.push({
        pathname: '/filter',
        state: {
          id_category,
          id,
          isActive,
          isWinner,
          levelNumber,
          title,
          contentPath,
          challengePath,
          testPath,
          nextLevelId,
        },
      })
    }
  }

  const activeteWinner = () => {
    const data = JSON.parse(localStorage.getItem('levelData'))
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].id === id_category) {
        for (let j = 0; j < data[i].levels.length; j++) {
          if (data[i].levels[j].id === id) {
            data[i].levels[j].isWinner = true
          }
        }
      }
    }
    localStorage.setItem('levelData', JSON.stringify(data))
  }

  const activeNextLevel = () => {
    const data = JSON.parse(localStorage.getItem('levelData'))
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].id === id_category) {
        for (let j = 0; j < data[i].levels.length; j++) {
          const level = levelNumber + 1
          if (level === data[i].levels[j].levelNumber) {
            data[i].levels[j].isActive = true
          }
        }
      }
    }
    localStorage.setItem('levelData', JSON.stringify(data))
  }

  return (
    <div className={classActive} onClick={handleClick}>
      <span>{levelNumber}</span>
      <div className={classWinner} />
    </div>
  )
}

export default LevelItem
