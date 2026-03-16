import { useEffect, useState } from 'react'

export function useTypewriter(words = [], speed = 70, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, deleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}