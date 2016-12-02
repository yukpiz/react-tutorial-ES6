import React from "react";
import { render } from "react-dom";

import CommentBox from "./components/CommentBox"

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Yukpiz", text: "foo!!"},
];

render(
  <CommentBox data={data}/>,
  document.getElementById("container")
);