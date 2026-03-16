import { useEffect, useState } from 'react'

const REPOS = [
  'jay2998/E-commerce-frontend',
  'jay2998/Pulse-check',
  'jay2998/real_live_aqi',
  'jay2998/finance-dashboard',
  'jay2998/ContactTracingApp',
]

export function useGitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const results = await Promise.all(
          REPOS.map(repo =>
            fetch(`https://api.github.com/repos/${repo}`)
              .then(r => r.ok ? r.json() : null)
              .catch(() => null)
          )
        )

        const valid = results.filter(Boolean)
        const totalStars = valid.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        const totalForks = valid.reduce((sum, r) => sum + (r.forks_count || 0), 0)

        // Fetch total commit count for user
        const eventsRes = await fetch('https://api.github.com/users/jay2998/repos?per_page=100')
        const repos = eventsRes.ok ? await eventsRes.json() : []
        const totalRepos = repos.length

        setStats({ totalStars, totalForks, totalRepos, repos: valid })
      } catch {
        setStats(null)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading }
}