import React from "react";
import './NewsArticle.css';


function NewsArticle ({author, title, description, url, urlToImage, publishedAt, content}){
  return(
   
    <div className='news-article-card' >
                            
      <img src={urlToImage} className='news-article-img'  alt=''/>
      <h1 className="article-title">{title}</h1>

      <div className="article-info">
            
        <p className="article-auhor">{author}</p>
        <p className="article-publisheAt">{publishedAt}</p>

      </div> 

      <p className="article-description">{description}</p>
      <h4 className="article-content">{content}</h4>

      <a href={url} target="_blank" className="btn-read-more">Read More</a>
        
      
    
      
  
                              

     </div>


  )
}

export default NewsArticle