import React, { Component } from "react";
// import axios from "axios";
import Posts from "./Posts/Posts";
import classes from "./Blog.module.css";
import { Route } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/new-post">NEW POST</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>HOME 111</h1>} />
        <Route path="/" render={() => <h1>HOME 222</h1>} />
        <Route path="/" exact component={Posts} />
      </div>
    );
  }
}

export default Blog;
