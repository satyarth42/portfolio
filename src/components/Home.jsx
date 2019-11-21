import React from 'react';
import './stylesheets/Home.css';

const str = "This is just a sample text.";
const ar_str = str.split("");

const Home = ()=>{
    return(
        <div>
            <div className="main">
                {ar_str.map((x)=>{return <span className='test'>{x}</span>;})}
            </div>
        </div>
    );
};

export default Home;