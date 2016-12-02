import React, { Component } from "react"
import Comment from "./Comment"

export default class CommentList extends Component {
  render() {
    return(
      <div className="commentList">
        <Comment author="Pate Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
        <Comment author="Yukpiz">foo!!</Comment>
      </div>
    );
  }
}

export default CommentList;
