import React from 'react'
import styled from 'styled-components'

const Home = () => {
  const Box = styled.div`
  background-color: orange;
  width: 40px;
  height:40px;
  margin-top: 20px;
  &:nth-child(1) {
  margin-top: 0;
  }
  `
  return <Box />
}


export default Home