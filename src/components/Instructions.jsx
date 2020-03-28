import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color:#43A047;
  color:white;
  padding:20px;
  min-height:200px;
  max-height:100%;
  margin:auto;
  display:grid;
  align-content:center;
`

const Instructions = () => {
  return (
    <Wrapper>
      <p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad justify-content, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p>
    </Wrapper>
  )
}

export default Instructions
