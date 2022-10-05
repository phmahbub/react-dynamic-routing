import React, { useState } from 'react';
import { Button } from 'react-daisyui';
import { useLoaderData, useNavigate } from 'react-router-dom';


const News = () => {
    const navigate = useNavigate()
    // const [news, setNews] = useState()
    const news = useLoaderData()
    console.log(news)
    return (
        <div className='flex justify-center'>
           
           
        </div>
    );
};

export default News;