import React from "react";
import "./App.css";
import Header from "./components/header";

import PostList from "./components/PostList";
import PostItem from "./components/postItem";

function App() {
  return (
    <div className="container">
      <Header />;
      
      <PostList/>
    </div>
  );
}


export default App;
