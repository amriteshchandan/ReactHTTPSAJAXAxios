import React, { Component } from "react";
import axios from "axios";

import classes from "./NewPost.module.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };

  postDataHandler = () => {
    const payLoad = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };

    axios.post("/posts/", payLoad);

    // const config = {
    //   headers: {
    //     header1: "one",
    //     header2: "two"
    //   }
    // };

    // const options = {
    //   headers: { "X-Custom-Header": "value" }
    // };

    // const headers = {
    //   header1: "one",
    //   header2: "two"
    // };

    // axios
    //   .post("http://localhost:7778/customHeaders", payLoad, config)
    //   .then(response => console.log(response));

    // axios({
    //   method: "post",
    //   url: "http://jsonplaceholder.typicode.com/posts",
    //   data: payLoad,
    //   config: headers
    // });
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
