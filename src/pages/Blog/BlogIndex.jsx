import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts, getAllCategories } from '../../data/blogs'
import logo from '../../assets/workkudosvg.svg'
import './Blog.css'

/* ── Helpers ─────────────────────────────────────────────── */
const catClass = (cat) => ({
  Recognition: 'cat--recognition',
  Culture: 'cat--culture',
  'Remote Work': 'cat--remote-work',
  Tips: 'cat--tips',
})[cat] ?? 'cat--general'

const catEmoji = (cat) => ({
  Recognition: '🏆',
  Culture: '🌱',
  'Remote Work': '🌐',
  Tips: '💡',
})[cat] ?? '📝'

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/* ── Arrow Icon ──────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Blog Card ───────────────────────────────────────────── */
function BlogCard({ post, style }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card" style={style}>
      {/* Cover image */}
      <div className="blog-card__cover">
        {post.coverImage
          ? <img src={post.coverImage} alt={post.title} loading="lazy" />
          : <div className="blog-card__cover-placeholder">{catEmoji(post.category)}</div>
        }
      </div>

      {/* Body */}
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className={`blog-card__category ${catClass(post.category)}`}>{post.category}</span>
          <span className="blog-card__read-time">{post.readTime}</span>
        </div>

        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="blog-card__footer">
          <div className="blog-card__author">
            {/* WorkKudo logo instead of letter */}
            <div className="blog-card__author-avatar">
              <img src={logo} alt="WorkKudo" className="blog-card__author-logo" />
            </div>
            <div>
              <span className="blog-card__author-name">{post.author}</span>
              <span className="blog-card__date">{formatDate(post.date)}</span>
            </div>
          </div>
          <div className="blog-card__arrow">
            <ArrowRight />
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ── Main Export ─────────────────────────────────────────── */
export default function BlogIndex() {
  const allPosts = useMemo(() => getAllPosts(), [])
  const categories = useMemo(() => getAllCategories(), [])
  const [activeCategory, setActiveCategory] = useState('All')

  const visiblePosts = useMemo(() =>
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter(p => p.category === activeCategory),
    [allPosts, activeCategory]
  )

  return (
    <div className="blog-page">

      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <div className="blog-hero__eyebrow">
            <img src={logo} alt="WorkKudo" className="blog-hero__logo" />
            Blog
          </div>
          <h1 className="blog-hero__title">
            Insights for <span>Modern Teams</span>
          </h1>
          <p className="blog-hero__subtitle">
            Recognition tips, culture strategies, and people-first thinking —
            to help you build a workplace where everyone thrives.
          </p>
        </div>
      </section>

      {/* ── Filter + Count Row ── */}
      <div className="blog-filters-row">
        <div className="blog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? 'blog-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="blog-posts-count">
          {visiblePosts.length} article{visiblePosts.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* ── Grid ── */}
      <section className="blog-grid-section">
        {visiblePosts.length === 0 ? (
          <div className="blog-empty">
            <div className="blog-empty__icon">🔍</div>
            <p>No posts in this category yet.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {visiblePosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                style={{ animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Newsletter strip ── */}
      <BlogNewsletter />
    </div>
  )
}

/* ── Newsletter ──────────────────────────────────────────── */
function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <div className="blog-newsletter">
      <div className="blog-newsletter__inner">
        <img src={logo} alt="WorkKudo" className="blog-newsletter__logo" />
        <h2>Stay in the loop</h2>
        <p>Recognition tips and culture guides — delivered every two weeks.</p>
        {done ? (
          <div className="blog-newsletter__success">🎉 You're in! Welcome to the WorkKudo community.</div>
        ) : (
          <form className="blog-newsletter__form" onSubmit={e => { e.preventDefault(); if (email.trim()) setDone(true) }}>
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="blog-newsletter__input"
              required
            />
            <button type="submit" className="blog-newsletter__btn">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  )
}
