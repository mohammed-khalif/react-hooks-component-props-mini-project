import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){

    return(
        <main>
            {blogData.posts.map((blog) =>(
                <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview}/>
            ))}
        </main>
    )
}

export default ArticleList;