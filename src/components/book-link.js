import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BookLink = ({ post }) => {
  let emoji = "📚"
  switch (post.type) {
    case "book":
      emoji = "📚"
      break
    case "film":
      emoji = "🎥"
      break
    case "online":
      emoji = "💾"
      break
    case "paper":
      emoji = "📝"
      break
    case "article":
      emoji = "📰"
      break
    default:
      emoji = "📚"
  }
  return (
    <div className="book-link">
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="book-link-image__link">
        {post.image ? (
          <Img
            className="book-link-image"
            alt={`${post.name}'s recommendation: '${post.title}' by ${post.author}.`}
            fluid={post.image.childImageSharp.fluid}
          />
        ) : (
          <h3>no image</h3>
        )}
      </a>
      <div className="book-link-info">
        <h2>{emoji}</h2>
        <h4 className="book-link-title">{post.title}</h4>
        <p className="book-link-author">
          {post.author}
        </p>
        <hr class="line" />
        <p className="book-link-chosen">
          Episode:{" "}
          <Link to={`/episodes/${post.episode}`} className="book-link-episode">
            {post.name}
          </Link>
        </p>
      </div>
    </div>
  )
}
export default BookLink
