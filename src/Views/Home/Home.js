
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import NewsArticle from '../../Component/NewsArticle/NewsArticle';


function Home()
{

    const [news , setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState(" pune");

    const loadNews = async () => {

       try
       {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-09&to=2024-03-09&sortBy=popularity&apiKey=70444052d2d2459c99023e4532137427`);

        setNews(response.data.articles);

       }

       catch(error)
       {
        console.log(error)
       }

    }

    useEffect (() => {
        loadNews()
    },[])

    useEffect (() =>
    {
        loadNews()
    },[searchQuery])

 
  


    return(
        <div>

            <div>
                  
                <nav className="navbar navbar-expand-lg bg-black">
                    <div className="container-fluid">
                    <a className="navbar-brand" id='navbar-brand' >NEWS_APP</a>
                        
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id="serach-engine"type="search" 
                            value={searchQuery} 
                            onChange={(e)=> {setSearchQuery(e.target.value)}} placeholder="Search Any News" aria-label="Search"/>
                        
                        </form>
                        
                    </div>
                </nav>

            </div>
           

            <div className='news-container'>

                {
                    news.map((newsArticle, index)=>{

                        const {author, title, description, url, urlToImage, publishedAt, content} = newsArticle  //destructuring

                        return(
                        
                            <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content} key={index}/>  //component main props pass kiye
                        )
                    })
                }  


            </div>

        
        </div>
    )
}

export default Home