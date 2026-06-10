import { useState, useEffect } from 'react'

export default function ComponentB() {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setPost(data)
        setLoading(false)
        setError('')
      })
      .catch(() => {
        setLoading(false)
        setError({})
        setError(`There was an error fetching the post`)
      })
  }, [])

  return <div>
    {loading ? 'Loading...' : post.title}
    {error || null}
  </div>
}
