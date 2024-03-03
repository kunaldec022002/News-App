import React from "react";
import './NewsArticle.css';


function NewsArticle ({author, title, description, url, urlToImage, publishedAt, content}){
  return(
   
    <div className='news-article-card' >
                            
                              <img src={urlToImage} className='news-article-img'  alt=''/>
                              <h1>{title}</h1>
                              <p>{author}</p>
                              <p>{description}</p>
                              <h5>{url}</h5>
                              <h3>{publishedAt}</h3>
                              <h5>{content}</h5>
                              

     </div>


  )
}

export default NewsArticle