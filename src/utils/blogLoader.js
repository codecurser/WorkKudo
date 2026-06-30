/**
 * blogLoader.js
 * Loads and parses all markdown blog posts from src/content/blogs/
 * Uses Vite's import.meta.glob for auto-discovery — no code change needed to add/remove posts.
 */

// Grab all raw markdown files at build time
const rawFiles = import.meta.glob('../content/blogs/*.md', { as: 'raw', eager: true })

/**
 * Lightweight frontmatter parser — splits on '---' and parses YAML-style key: value pairs.
 * No external dependency needed.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const frontmatterStr = match[1]
  const content = match[2]
  const meta = {}

  frontmatterStr.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    // Boolean coercion
    if (value === 'true') value = true
    else if (value === 'false') value = false
    meta[key] = value
  })

  return { meta, content }
}

// Parse all files once and cache
let _parsed = null
function getParsed() {
  if (_parsed) return _parsed
  _parsed = Object.entries(rawFiles).map(([filepath, raw]) => {
    const { meta, content } = parseFrontmatter(raw)
    // Derive slug from filename if not in frontmatter
    const filename = filepath.split('/').pop().replace('.md', '')
    return {
      slug: meta.slug || filename,
      title: meta.title || 'Untitled',
      date: meta.date || '',
      author: meta.author || 'WorkKudo Team',
      category: meta.category || 'General',
      excerpt: meta.excerpt || '',
      coverImage: meta.coverImage || null,
      readTime: meta.readTime || '5 min read',
      featured: meta.featured === true,
      content,
    }
  })
  // Sort newest first
  _parsed.sort((a, b) => new Date(b.date) - new Date(a.date))
  return _parsed
}

/** Returns all posts (metadata + content) sorted by date descending */
export function getAllPosts() {
  return getParsed()
}

/** Returns a single post by slug, or null if not found */
export function getPostBySlug(slug) {
  return getParsed().find(p => p.slug === slug) || null
}

/** Returns all unique categories */
export function getAllCategories() {
  const cats = getParsed().map(p => p.category)
  return ['All', ...Array.from(new Set(cats))]
}

/** Returns posts filtered by category */
export function getPostsByCategory(category) {
  if (category === 'All') return getParsed()
  return getParsed().filter(p => p.category === category)
}
