import react from 'react';
import {useState, useEffect} from 'react';
import FeedCard from '../../components/FeedCard';
import { Navbar } from '../../components/NavBar';

const NewsFeed = () => {   
   
   return(
      <>
         <Navbar/>
         <FeedCard/>                    
      </> 
   );
}

export default NewsFeed;