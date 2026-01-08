import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdBookmarkAdd } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { addTotalPhone } from '../utilitis/localstoreg';

const PhoneDitels = () => {
   const data = useLoaderData()
    const {id }=useParams()
   const convarId = parseInt(id);
  const onePhone = data.find(d => d.id === convarId);
  const {image ,name ,description ,camera_info } = onePhone;
  const localStorge = (onePhone)=>{
     addTotalPhone(onePhone)
      
  }
 
    return (
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${image})`
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{name}</h1>
      <p className="mb-5">
        {description}
      </p>
      <p className="mb-5">
        {camera_info}
      </p>
     <div className="text-end justify-end items-end  flex gsp-4 space-x-3 ">
      
       <button className="relative inline-block text-lg group cursor-pointer">
                       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                             <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                             <span className="relative"><FaShoppingCart size={25} /></span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
       </button>
        <button  onClick={()=>localStorge(onePhone)}  className="relative inline-block text-lg group cursor-pointer">
                       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                             <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                             <span className="relative"> <MdBookmarkAdd size={25} /></span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
       </button>
     </div>
    </div>
  </div>
</div>
    );
};

export default PhoneDitels;