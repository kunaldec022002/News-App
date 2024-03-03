
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

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
        </div>
    )
}

export default Home