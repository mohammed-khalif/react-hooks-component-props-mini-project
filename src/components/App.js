import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  const name = blogData.name
  const about = blogData.about
  const image = blogData.image
  return (
    <div className="App">
       <Header name={name} />
       <About about={about} image={image}/>
       <ArticleList/>
      
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
