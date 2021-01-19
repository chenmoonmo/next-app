import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Welecome = () => {
  const router = useRouter()
  const { query = {} } = router || {}
  const { name = '' } = query || {}
  useEffect(() => { }, [])
  return <div>welecome {name}</div>
}







export default Welecome