import styled from 'styled-components'

import React from 'react'

import CodeEditor from '../components/CodeEditor'
import Instructions from '../components/Instructions'

const Wrapper = styled.div`
  height: 100vh;
  background-color:#43A047;
  display: grid;
  grid-template-columns:1fr 1fr;
  padding:30px;
  color:white;
  align-items:flex-start;
  grid-gap:20px;
`

const Sidebar = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr;
  color:#333;
`
const Results = styled.div`
  background-color:#2C5667;
  min-height: 50%;
  color:white;
  padding:50px;
`

const Helper = styled.div``

const Home = () => {
  return (
    <Wrapper>
      <Sidebar>
        <Instructions />
        {/* <CodeEditor /> */}
      </Sidebar>
      <Results>
        Acá se muestra si hay un error o no
      </Results>
      <Helper />

    </Wrapper>
  )
}

export default Home
