import React from "react";
import './NewsArticle.css';


function NewsArticle (){
  return(
   
    <div className='news-article-card' key={index}>
                            
                              <img src={urlToImage} className='news-article-img'  alt=''/>
                              <h1>{title}</h1>
                              <p>{author}</p>

                          </div>
  )
}

export default NewsArticle