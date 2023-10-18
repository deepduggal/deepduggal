/**
 * Hooks for interacting with pages directly
 */
import { useEffect } from 'react'

const addScriptToPage = (url) => {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

// Add and load a JS script/file when the component renders
export function useScriptTag (url) {
  useEffect(() => {
    addScriptToPage(url)
  }, [url])
}
