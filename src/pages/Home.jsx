import React, { useState } from 'react';
import Hroo from '../componet/navber/Hroo';
import PhoneDitels from './PhoneDitels';
import { useLoaderData } from 'react-router';
import PhoneCard from './PhoneCard';


const Home = () => {
    const data = useLoaderData()
    const[phones , setPhones] = useState(data)
    const handelSharch =(e ,text)=>{
         e.preventDefault()
 
         const suchFilter =data.filter(phone => 
            phone?.name?.toLowerCase().includes(text.toLowerCase()) || phone?.brand?.toLowerCase().includes(text.toLowerCase()) 
        )

        setPhones(suchFilter);
    }
    return (
        <div>
        <Hroo handelSharch ={handelSharch}></Hroo>
           <PhoneCard data={phones}></PhoneCard>
        </div>
    );
};

export default Home;