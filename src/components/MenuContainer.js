import React from 'react';
import {IoFastFood} from "react-icons/io5";
import { useEffect, useState } from 'react';
import { categories } from "./dataCategory";


const MenuContainer = () => {

  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  useEffect(() => {}, [filter]);

  return (

    <section className="w-full my-1" id="menu">
    
    <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-16 
    overflow-x-scroll scrollbar-none">
      {categories &&
            categories.map((category) => (
              <div 
              Key={category.id}
              className={`group ${
                filter === category.urlParamName ? "bg-green-700" : "bg-white"} w-24 h-28 cursor-pointer hover:bg-green-700 gap-3 rounded-lg
                drop-shadow-xl flex flex-col items-center justify-center duration-150 transition-all ease-in-out`}>
                <div className='w-10 h-10 py-2 pw-2 rounded-full bg-green-800 group-hover:bg-white justify-center items-center'>
                 <IoFastFood className='text-card group-hover:text-textColor text-3xl  py-0 justify-center items-center' />
                 <p className='text-sm text-textColor group-hover:text-white items-start justify-start'>
                  onClick={() => setFilter(category.urlParamName)}
                 </p>       
                </div>       
              </div>
          ))}

    </div>
    </section>
    
  )
};

export default MenuContainer