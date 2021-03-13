import React from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header/Header';
import BlogPost from './components/BlogPost';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/blog/:id">
            <BlogPost/>
          </Route>
          <Route path="/">
            <BlogPosts/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
