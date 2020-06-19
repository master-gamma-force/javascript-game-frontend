import { useState, useEffect } from 'react'

const useDynamicMarkdownImport = (path) => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const markdownFile = await import(`../../${path}`)
      const markdownResponse = await fetch(markdownFile.default)
      const markdownText = await markdownResponse.text()
      setMarkdown(markdownText)
    }
    fetchData()
  }, [])

  return [markdown, setMarkdown]
}

export default useDynamicMarkdownImport
