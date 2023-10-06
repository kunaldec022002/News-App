import React from "react";
import "./NewsArticle.css"

function NewsArticle({author,title,description,url,urlToImage,publishdAt,content})
{
    return(
        <div className="news-articales-card">

        <img src={urlToImage} className="news-articles-img"/>
        <h1 className="article-title">{title}</h1>

        <div>
            <p>{author}</p>
            <p>{publishdAt}</p>
        </div>

        <p>{description}</p>

        <a href={url} target="blank" className="btn-read-more">Read More</a>

        </div>
    )
}

export default NewsArticle