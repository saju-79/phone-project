 
import AllCard from './AllCard';
import { getstoredPhone } from '../utilitis/localstoreg';
  
// import { useState } from 'react';
 



const Pavrite = () => {
//    const [id ,setId] = useState([])
     
    const localData = getstoredPhone() 
    
    
    
     
         
          
   
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10  mt-5">
               {
                localData.map(phone => <AllCard  key={phone.id} phone={phone} ></AllCard>)
               }
             </div>
    );
};

export default Pavrite;