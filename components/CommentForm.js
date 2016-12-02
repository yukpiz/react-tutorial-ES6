import React, { Component } from "react"

export default class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
    React.findDOMNode(this.refs.author).value = "";
    React.findDOMNode(this.refs.text).value = "";
  }

  render() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author"/>
        <input type="text" placeholder="Say something..." ref="text"/>
        <input type="submit" value="Post"/>
      </form>
    );
  }
}

export default CommentForm;
