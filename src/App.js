import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import posts from "./posts.json";

const Layout = (props) => (
  <div>
    <h1>Bender's Most awesome blog</h1>
    <hr />
    <div>{props.children}</div>
  </div>
);

const PostsList = ({ posts }) => (
  <div>
    <ul>
      {posts.map((post) => (
        <li>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            Published by <strong>{post.author}</strong>on{post.publishedAt}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const PostPage = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <div>{post.content}</div>
    <p>
      <Link to="/">Back</Link>
    </p>
  </div>
);

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <PostsList posts={posts} />} />
        <Route
          path="/post/:id"
          render={({ match }) => <PostPage post={posts[match.params.id - 1]} />}
        />
        <Route render={() => <div>Post not found</div>} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
