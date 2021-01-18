import React from 'react'

const Welecome = ({ params }) => {
  return <div>welecome {params.name}</div>
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { name: 'lee' } } // See the "paths" section below
    ],
    fallback: true // See the "fallback" section below
  };
}

export function getStaticProps({ params }) {
  return { props: { params } }
}




export default Welecome