import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "../../Component/NewsArticle/NewsArticle";
import './Home.css';

function Home()
{
    const [News , setNews] = useState([])

    const [searchQuery,setsearchQuery] = useState('sports')

    const loadNews = async ()=>
    {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-05&to=2023-10-05&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
            setNews(response.data.articles)
           }

          catch(error)
          {
            console.log(error)
          }
    }      

    useEffect(()=>
    {
          loadNews()
    }, []
    )

    useEffect(()=>
    {
        loadNews()
    },[searchQuery])
    return(
        <div>
            <h1 className="app-title">News App</h1>

            <input type="text" className="search-input" placeholder="Ask Enything" value={searchQuery}
            onChange={(e)=>
            {
                setsearchQuery(e.target.value)
            }}
            />
          

            <div className="news-container">
                {
                News.map((newsArticle,index)=>{
                    const { author,title,description,url,urlToImage,publishdAt,content} = newsArticle
                    return( <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishdAt ={publishdAt} content={content}
                    key={index}/>
                    )
                
                })
                }

            </div>          
        </div>
    )
}

export default Home