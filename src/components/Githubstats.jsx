import { useGitHubStats } from '../hooks/useGitHubStats'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function GitHubStats() {
  const { stats, loading } = useGitHubStats()
  const { ref, isVisible } = useScrollAnimation()

  const items = [
    { label: 'Public Repos',  value: stats?.totalRepos, icon: '📁' },
    { label: 'Total Stars',   value: stats?.totalStars, icon: '⭐' },
    { label: 'Total Forks',   value: stats?.totalForks, icon: '🍴' },
  ]

  return (
    <div
      ref={ref}
      className={`mt-8 p-6 bg-[#0D1526] border border-[#C9A84C]/10 rounded-2xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center gap-2 mb-5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" opacity="0.7">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span className="font-mono text-xs text-[#C9A84C]/60 tracking-widest uppercase">GitHub Stats</span>
        {!loading && (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-[#4ade80]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Live
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.label} className="text-center">
            <div className="font-display text-2xl font-bold text-[#C9A84C] mb-1">
              {loading ? (
                <span className="inline-block w-8 h-6 bg-[#C9A84C]/10 rounded animate-pulse" />
              ) : (
                item.value ?? '—'
              )}
            </div>
            <div className="font-mono text-xs text-[#7A8099] tracking-wide">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Individual repo stars */}
      {!loading && stats?.repos?.length > 0 && (
        <div className="mt-5 pt-5 border-t border-[#C9A84C]/8 flex flex-col gap-2">
          {stats.repos.map(repo => (
            <div key={repo.name} className="flex items-center justify-between text-xs">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[#7A8099] hover:text-[#C9A84C] transition-colors truncate max-w-[70%]"
              >
                {repo.name}
              </a>
              <span className="font-mono text-[#C9A84C]/60 flex items-center gap-1">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}