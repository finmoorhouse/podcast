import React from "react"

const Rate = props => {
  return (
    <form action="/thanks-for-rating" name="rating" method="POST" data-netlify="true">
      <label for="rating">Your rating:</label>
      <select type="text" id="rating" name="rating" >
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
      <label for="comments">Further comments:</label>
      <textarea name="comments" rows="4" cols="50">

      </textarea>
      <button type="submit">
        Go
      </button>
    </form>
  )
}

export default Rate