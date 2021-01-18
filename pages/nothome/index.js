import react from 'react'
import styled from 'styled-components'
import Home from '../home'

const Container = styled.div`
width: 200px;
height:200px;
background-color: yellow;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

const NotHome = ({ arr }) => {
  return (
    <Container>
      {arr.map((item) => <Home key={item} />)}
    </Container>
  )
}

export function getStaticProps() {
  return {
    props: {
      arr: [1, 2, 3]
    },
  }
}



export default NotHome