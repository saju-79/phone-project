import React from 'react';
import Hroo from '../componet/navber/Hroo';
import PhoneDitels from './PhoneDitels';
import { useLoaderData } from 'react-router';
import PhoneCard from './PhoneCard';


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
          <Hroo></Hroo>
           <PhoneCard data={data}></PhoneCard>
        </div>
    );
};

export default Home;