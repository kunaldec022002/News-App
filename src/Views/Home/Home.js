
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import NewsArticle from '../../Component/NewsArticle/NewsArticle';

function Home()
{

    const [news , setNews] = useState([]);

    const loadNews = async () => {

        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-03-02&to=2024-03-02&sortBy=popularity&apiKey=70444052d2d2459c99023e4532137427")
        setNews(response.data.articles);


    }

    useEffect (() => {
        loadNews()
    },[])

 
  


    return(
        <div>
            <h1>News App</h1> 

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