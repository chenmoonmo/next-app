import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Welecome = ({ name2 }) => {
  const router = useRouter()
  const { query = {} } = router || {}
  const { name = '' } = query || {}
  useEffect(() => { }, [])
  return (
    <div>
      <div>welecome {name}</div><div>welecome {name2}</div>
    </div>
  )

}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: '*' } }
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { name2: params.name }
  }
}

export default Welecome