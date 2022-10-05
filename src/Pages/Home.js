import React from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center'>
           <Button onClick={()=>{navigate('/news')}} color='info'>Go to News Page</Button>
       
        </div>
    );
};

export default Home;