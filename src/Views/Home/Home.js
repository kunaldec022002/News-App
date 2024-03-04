
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
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-02&to=2024-03-02&sortBy=popularity&apiKey=70444052d2d2459c99023e4532137427`);

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

    useEffect (() =>{loadNews()},[searchQuery])

 
  


    return(
        <div>
            <h1>News App</h1> 

            <input type='text' 
            value={searchQuery}
             onChange={(e)=> {setSearchQuery(e.target.value)}}/>

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