import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../../utils/blogLoader'
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
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

/* ── Icons ───────────────────────────────────────────────── */
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BackArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M10 6.5H2M5.5 2l-4 4.5 4 4.5" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Related Mini-card ───────────────────────────────────── */
function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__cover">
        {post.coverImage
          ? <img src={post.coverImage} alt={post.title} loading="lazy" />
          : <div className="blog-card__cover-placeholder">{catEmoji(post.category)}</div>
        }
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className={`blog-card__category ${catClass(post.category)}`}>{post.category}</span>
          <span className="blog-card__read-time">{post.readTime}</span>
        </div>
        <h3 className="blog-card__title" style={{ fontSize: 15 }}>{post.title}</h3>
        <div className="blog-card__footer" style={{ marginTop: 'auto' }}>
          <div className="blog-card__author">
            <div className="blog-card__author-avatar">
              <img src={logo} alt="WorkKudo" className="blog-card__author-logo" />
            </div>
            <div>
              <span className="blog-card__author-name">{post.author}</span>
              <span className="blog-card__date">{formatDate(post.date)}</span>
            </div>
          </div>
          <div className="blog-card__arrow"><ArrowRight /></div>
        </div>
      </div>
    </Link>
  )
}

/* ── Sidebar ─────────────────────────────────────────────── */
function PostSidebar({ post }) {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar__card">
        <p className="post-sidebar__label">About this post</p>

        <div className="post-sidebar__item">
          <span className="post-sidebar__key">Published</span>
          <span className="post-sidebar__val">{formatDate(post.date)}</span>
        </div>

        <div className="post-sidebar__item">
          <span className="post-sidebar__key">Author</span>
          <span className="post-sidebar__val">{post.author}</span>
        </div>

        <div className="post-sidebar__item">
          <span className="post-sidebar__key">Read time</span>
          <span className="post-sidebar__val">{post.readTime}</span>
        </div>

        <div className="post-sidebar__item">
          <span className="post-sidebar__key">Category</span>
          <span className={`post-sidebar__cat ${catClass(post.category)}`}>{post.category}</span>
        </div>

        <a href="https://workkudo.ai/signin" className="post-sidebar__cta">
          Create a Board →
        </a>
      </div>
    </aside>
  )
}

/* ── Main Component ──────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams()
  const post = useMemo(() => getPostBySlug(slug), [slug])
  const allPosts = useMemo(() => getAllPosts(), [])

  if (!post) {
    return (
      <div className="post-page">
        <div className="blog-not-found">
          <div className="blog-not-found__icon">🔍</div>
          <p>Post not found.</p>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  // Related: same category, not this post — fill up to 2 from others if needed
  const related = allPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const relatedFilled = related.length < 2
    ? [...related, ...allPosts.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - related.length)]
    : related

  return (
    <div className="post-page">
      {/* ── Hero ── */}
      <section className="post-hero">
        <div className="post-hero__inner">
          <Link to="/blog" className="post-back">
            <BackArrow /> Back to Blog
          </Link>
          <div className="post-hero__meta">
            <span className="post-hero__category">{post.category}</span>
            <span className="post-hero__dot" />
            <span className="post-hero__read-time">{post.readTime}</span>
          </div>
          <h1 className="post-hero__title">{post.title}</h1>
          <p className="post-hero__excerpt">{post.excerpt}</p>
          <div className="post-hero__author-row">
            <div className="post-hero__avatar">
              <img src={logo} alt="WorkKudo" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div>
              <div className="post-hero__author-name">{post.author}</div>
              <div className="post-hero__date">{formatDate(post.date)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover image ── */}
      <div className="post-cover-wrap">
        <div className="post-cover">
          {post.coverImage
            ? <img src={post.coverImage} alt={post.title} />
            : <div className="post-cover-placeholder">{catEmoji(post.category)}</div>
          }
        </div>
      </div>

      {/* ── Two-column layout: content + sidebar ── */}
      <div className="post-layout">
        {/* Main content */}
        <div className="post-body">
          <article className="post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* CTA Banner */}
          <div className="post-cta">
            <div className="post-cta__text">
              <h3>Ready to build a recognition culture?</h3>
              <p>Beautiful group cards, peer kudos, and milestone boards — all in one place.</p>
            </div>
            <a href="https://workkudo.ai/signin" className="post-cta__btn">
              Create a Board <ArrowRight size={13} />
            </a>
          </div>

          {/* Related posts */}
          {relatedFilled.length > 0 && (
            <div className="post-related">
              <h2 className="post-related__title">More from the Blog</h2>
              <div className="post-related__grid">
                {relatedFilled.map(p => <RelatedCard key={p.slug} post={p} />)}
              </div>
            </div>
          )}
        </div>

        {/* Sticky sidebar */}
        <PostSidebar post={post} />
      </div>
    </div>
  )
}
