import { useState, useEffect } from 'react'

const useDynamicTestsImport = (path) => {
  const [tests, setTests] = useState([])
  const [code, setCode] = useState('')

  useEffect(() => {
    const fetchData = async()=>{
      const {TEMPLATE, TEST,} = await import(`../../${path}`)
      setCode(TEMPLATE)
      setTests(TEST)
    }
    fetchData()
  }, [])

  return {tests,code,setCode,setTests}
}

export default useDynamicTestsImport
