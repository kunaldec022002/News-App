
import React, { useEffect, useState } from 'react';
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
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-02&to=2024-03-02&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

        setNews(response.data.articles);

       }

       catch(err)
       {
        console.log(err)
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
                    <a class="navbar-brand" id='navbar-brand' >NEWS_APP</a>
                        
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